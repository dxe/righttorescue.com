// Information about the campaign that referred the user to this page.
export const KEY = 'session-referring-campaign';

const MAX_SESSION_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

/**
 * AdReferralService persists UTM parametes in Local Storage and allows for
 * later retrieval of those parameters up until the data expires.
 */
class AdReferralService {
    public constructor(
        private readonly window: Window,
        private readonly clock: () => number,
    ) { }

    /**
     * Hook for page load needed to save any UTM parameters.
     */
    public onAppInit() {
        const params = this.getUtmParamsFromUrl();
        if (params.isEmpty()) return;

        this.saveSession(new UtmSession(this.clock(), params, this.clock));
    }

    /**
     * Gets the most recently seen set of UTM parameters, if not expired.
     */
    public getSessionUtmParams(): UtmParams | null {
        const session = this.loadSession();
        if (session === null) return null;

        return session.lastUtmParams;
    }

    private saveSession(session: UtmSession) {
        this.window.localStorage.setItem(KEY, JSON.stringify(session))
    }

    private loadSession(): UtmSession | null {
        const sessionJson = this.window.localStorage.getItem(KEY);
        if (sessionJson === null) return null;

        try {
            const sessionSerialization: unknown = JSON.parse(sessionJson);
            if (!isUtmSessionSerialization(sessionSerialization)) return null;

            const session = UtmSession.deserialize(
                sessionSerialization, this.clock);
            if (session.isExpired()) return null;

            return session;
        } catch (e) {
            console.error("Error parsing UTM params from local storage");
            console.error(e);
            return null;
        }
    }

    private getUtmParamsFromUrl(): UtmParams {
        const urlSearchParams = new URLSearchParams(
            this.window.location.search);

        return new UtmParams(
            urlSearchParams.get('utm_source'),
            urlSearchParams.get('utm_medium'),
            urlSearchParams.get('utm_campaign'),
            urlSearchParams.get('utm_content'),
        );
    }
}

const adReferralService = new AdReferralService(window, Date.now);
export { 
    adReferralService, 
    AdReferralService as AdReferralServiceTestOnly,
    MAX_SESSION_MS as MAX_SESSION_MS_TEST_ONLY
};

/**
 * UTM info for the session. A session is tied to local storage and expires
 * after a certain duration of the page not being re-initialized with UTM
 * arguments.
 */
class UtmSession {
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

        private readonly clock: () => number,
    ) { }

    public isExpired(): boolean {
        return this.clock() - this.lastUtmTime > MAX_SESSION_MS;
    }

    public serialize(): UtmSessionSerialization {
        return {
            lastUtmTime: this.lastUtmTime,
            lastUtmParams: this.lastUtmParams.serialize(),
        };
    }

    public static deserialize(
        obj: UtmSessionSerialization,
        clock: () => number) {
        return new UtmSession(
            obj.lastUtmTime,
            UtmParams.deserialize(obj.lastUtmParams),
            clock);
    }
};

type UtmSessionSerialization = {
    lastUtmTime: number;
    lastUtmParams: UtmParamsSerialization;
}

function isUtmSessionSerialization(obj: any): obj is UtmSessionSerialization {
    return typeof obj.lastUtmTime === 'number' &&
        typeof obj.lastUtmParams === 'object';
}

export class UtmParams {
    constructor(
        public readonly source: string | null,
        public readonly medium: string | null,
        public readonly campaign: string | null,
        public readonly content: string | null,
    ) { }

    isEmpty() {
        return this.source == null &&
            this.medium == null &&
            this.campaign == null &&
            this.content == null;
    }

    serialize(): UtmParamsSerialization {
        return this;
    }

    static deserialize(obj: UtmParamsSerialization): UtmParams {
        return new UtmParams(
            obj.source, obj.medium, obj.campaign, obj.content
        );
    }
}

type UtmParamsSerialization = {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
};
