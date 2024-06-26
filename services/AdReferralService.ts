// Information about the campaign that referred the user to this page.
export const KEY = "referral-traffic-analytics";

const EXPIRES_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

/**
 * AdReferralService persists UTM parametes in Local Storage and allows for
 * later retrieval of those parameters up until the data expires.
 *
 * This interface is designed to have few dependencies in case it will be reused
 * in other applications.
 */
export class AdReferralService {
  public constructor(
    private readonly window: Window,
    private readonly clock: () => number
  ) {}

  /**
   * Hook for page load needed to save any UTM parameters.
   */
  public onAppInit() {
    const params = this.getUtmParamsFromUrl();
    if (params.isEmpty()) return;

    this.saveUtm(new UtmState(this.clock(), params, this.clock));
  }

  /**
   * Gets the most recently seen set of UTM parameters, if not expired.
   */
  public getUtmParams(): UtmParams | null {
    const utm = this.loadUtm();
    if (utm === null) return null;

    return utm.lastUtmParams;
  }

  private saveUtm(utm: UtmState) {
    this.window.localStorage.setItem(KEY, JSON.stringify(utm));
  }

  private loadUtm(): UtmState | null {
    const utmJson = this.window.localStorage.getItem(KEY);
    if (utmJson === null) return null;

    try {
      const utmSerialization: unknown = JSON.parse(utmJson);
      if (!isUtmSerialization(utmSerialization)) return null;

      const utm = UtmState.deserialize(utmSerialization, this.clock);
      if (utm.isExpired()) return null;

      return utm;
    } catch (e) {
      console.error("Error parsing UTM params from local storage");
      console.error(e);
      return null;
    }
  }

  private getUtmParamsFromUrl(): UtmParams {
    const urlSearchParams = new URLSearchParams(this.window.location.search);

    return new UtmParams(
      urlSearchParams.get("utm_source"),
      urlSearchParams.get("utm_medium"),
      urlSearchParams.get("utm_campaign"),
      urlSearchParams.get("utm_content")
    );
  }
}

let adReferralService: AdReferralService | undefined = undefined;

export function onAppInit(window: Window) {
  adReferralService = new AdReferralService(window, Date.now);
  adReferralService.onAppInit();
}

export function getInstance(): AdReferralService {
  if (adReferralService === undefined) {
    throw Error("Must call AdReferralService.onAppInit first");
  }
  return adReferralService;
}

export { EXPIRES_MS as EXPIRES_MS_TEST_ONLY };

/**
 * UTM state. The state is tied to local storage and expires after a certain
 * duration of the page not being re-initialized with UTM arguments.
 */
class UtmState {
  constructor(
    /**
     * Last time that any UTM values were present during app initialization.
     */
    public readonly lastUtmTime: number,

    /**
     * UTM values from the last time that any UTM values were present during
     * app initialization.
     */
    public readonly lastUtmParams: UtmParams,

    private readonly clock: () => number
  ) {}

  public isExpired(): boolean {
    return this.clock() - this.lastUtmTime > EXPIRES_MS;
  }

  public serialize(): UtmSerialization {
    return {
      lastUtmTime: this.lastUtmTime,
      lastUtmParams: this.lastUtmParams.serialize(),
    };
  }

  public static deserialize(obj: UtmSerialization, clock: () => number) {
    return new UtmState(
      obj.lastUtmTime,
      UtmParams.deserialize(obj.lastUtmParams),
      clock
    );
  }
}

type UtmSerialization = {
  lastUtmTime: number;
  lastUtmParams: UtmParamsSerialization;
};

function isUtmSerialization(obj: any): obj is UtmSerialization {
  return (
    typeof obj.lastUtmTime === "number" && typeof obj.lastUtmParams === "object"
  );
}

export class UtmParams {
  constructor(
    public readonly source: string | null,
    public readonly medium: string | null,
    public readonly campaign: string | null,
    public readonly content: string | null
  ) {}

  isEmpty() {
    return (
      this.source == null &&
      this.medium == null &&
      this.campaign == null &&
      this.content == null
    );
  }

  serialize(): UtmParamsSerialization {
    return this;
  }

  static deserialize(obj: UtmParamsSerialization): UtmParams {
    return new UtmParams(obj.source, obj.medium, obj.campaign, obj.content);
  }
}

type UtmParamsSerialization = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
};
