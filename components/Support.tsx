import Script from "next/script";

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
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-heart fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">
                Your support allows us to stand up to legal repression and
                continue our groundbreaking work
              </h2>

              <a
                id="donateButton"
                className="btn btn-primary mx-auto donateButton"
                aria-label="Donate"
                data-formid="8475"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="funraise-script"
        strategy="afterInteractive"
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
