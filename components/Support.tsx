import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

type DonationConfig = {
  donationSubtext: string | null;
  donationThermometer: {
    // Campaign start date in yyyy-mm-dd format. Donations received on or after this date
    // will be counted toward the goal.
    startDate: string;
    // How much money the campaign wants to raise, in dollars.
    goal: number;
    // How much money to subtract from the current amount. Useful for subtracting donations
    // received externally from the campaign on or after the start date.
    offset: number;
  } | null;
};

const config: DonationConfig = {
  donationSubtext: "All donations tripled until January 1st.",
  donationThermometer: {
    startDate: "2025-11-01",
    goal: 100000,
    offset: 162543.31,
  },
};

export const Support = () => {
  return (
    <>
      <section
        id="support"
        className="signup-section"
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 col-lg-8 mx-auto text-center"
              style={{ marginTop: "90px" }}
            >
              <h2
                className="text-white my-3"
                style={{
                  textShadow: "6px 6px 12px rgba(0, 0, 0, 1)",
                }}
              >
                Your support allows us to stand up to legal repression and
                continue our groundbreaking work.
              </h2>

              <Button
                style={{ minWidth: 250 }}
                id="donateButton"
                className="donateButton"
                aria-label="Donate"
                data-formid="8475"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                  style={{ maxWidth: 20, marginRight: 15 }}
                />
                Donate
              </Button>
              {config.donationSubtext != null &&
              config.donationSubtext != "" ? (
                <h2
                  className="text-white my-3"
                  style={{
                    textShadow: "6px 6px 12px rgba(0, 0, 0, 1)",
                    fontSize: "smaller",
                  }}
                >
                  {config.donationSubtext}
                </h2>
              ) : null}
              {config.donationThermometer != null ? (
                <div style={{ marginTop: "50px" }}>
                  <link
                    href="https://s3.dxe.io/donation-thermometer/index.css"
                    rel="stylesheet"
                  />
                  <div
                    className="dxe-donation-thermometer"
                    data-start-date={config.donationThermometer.startDate}
                    data-goal={config.donationThermometer.goal}
                    data-offset={config.donationThermometer.offset}
                  ></div>
                  <Script
                    src="https://s3.dxe.io/donation-thermometer/index.js"
                    defer
                  ></Script>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <Script
        id="funraise-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(f,u,n,r,a,i,s,e){var data={window:window,document:document,tag:"script",data:"funraise",orgId:f,uri:u,common:n,client:r,script:a};var scripts;var funraiseScript;data.window[data.data]=data.window[data.data]||[];if(data.window[data.data].scriptIsLoading||data.window[data.data].scriptIsLoaded)return;data.window[data.data].loading=true;data.window[data.data].push("init",data);scripts=data.document.getElementsByTagName(data.tag)[0];funraiseScript=data.document.createElement(data.tag);funraiseScript.async=true;funraiseScript.src=data.uri+data.common+data.script+"?orgId="+data.orgId;scripts.parentNode.insertBefore(funraiseScript,scripts)})("472c107b-a760-4be2-b990-81c429da14d5","https://assets.funraise.io","/widget/common/2.0","/widget/client","/inject-form.js");

          window.funraise.push('create', {form: 8475});

          window.funraise.push('onSuccess', {form: 8475}, function(donor, donation) {
            if (donation.recurring === true) {
              dataLayer.push({'event': 'donate-monthly-completed'});
            } else {
              dataLayer.push({'event': 'donate-once-completed'});
            }
          });
          
          document.getElementById("donateButton").addEventListener("click", function() {
            dataLayer.push({'event': 'donate-button-clicked'});
          });  
          `,
        }}
      />
    </>
  );
};
