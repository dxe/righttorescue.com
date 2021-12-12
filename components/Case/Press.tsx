import Script from "next/script";
import { useEffect } from "react";

export const Press = (props: PressProps) => {
  // This seems to be the best way to ensure that the script runs each time the page is navigated to.
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://cdn.iframe.ly/embed.js";
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <section
      id="press"
      className="projects-section bg-light"
      style={{ paddingTop: "0px !important" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center" style={{ paddingBottom: "2rem" }}>
              <h2>Read the Press</h2>
            </div>
          </div>
        </div>

        <div className="container">{props.children}</div>
      </div>
    </section>
  );
};

interface PressProps {
  children: any;
}
