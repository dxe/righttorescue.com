import Script from "next/script";
import React, { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import { useInterval } from "@restart/hooks";

export const Letter = () => {
  const [expanded, setExpanded] = useState(false);

  // This seems to be the best way to ensure that the script runs each time the page is navigated to.
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://storage.googleapis.com/dxe-petitions/api.js";
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <section id="sign" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4 text-center">Sign the Letter</h2>

            <p className="text-white">
              We, the undersigned, write to demand immediate action to rectify
              the abuses of the factory farming industry around the world, and
              protect whistleblowers who expose this misconduct and help the
              suffering animals.
            </p>

            <p className="text-white-50 text-center" id="read-more">
              <strong
                onClick={() => setExpanded(!expanded)}
                style={{ cursor: "pointer" }}
              >
                {expanded ? "Read less -" : "Read more +"}
              </strong>
            </p>

            {expanded && (
              <div className="text-white">
                <p>
                  The toll of factory farming is beyond doubt. Industrial animal
                  farms are one of the largest causes of climate change and
                  habitat loss. They contribute to serious public health risks,
                  including antibiotic resistance that sickens and kills young
                  children. And they inflict grotesque cruelty on billions of
                  sentient beings. Polling data shows that an overwhelming 97%
                  of the US public believes that animals need some legal
                  protection from exploitation, and 49% believes factory farms
                  should be outright banned. These numbers increase every year,
                  which is why leading political commentators and philosophers
                  have described animal rights as the next frontier of social
                  justice.
                </p>

                <p>
                  Yet far from supporting progress, our political and corporate
                  leaders have too often blocked it. Nationwide, the industry
                  receives billions of dollars in subsidies -- including
                  corporate welfare for millionaires. Government-established
                  price controls gouge consumers, especially those who are in
                  most need, and deceptive corporate marketing manipulates us
                  into taking actions against our own values. Laws have been
                  passed to prohibit competition in the market by plant-based
                  alternatives. And perhaps most frighteningly, our most basic
                  civil liberties have been undermined -- and over 120
                  nonviolent activists and whistleblowers have been arrested on
                  felony charges and threatened with prison -- for exposing the
                  industry’s misconduct and trying to help suffering animals.
                </p>

                <p>
                  The devastating toll of this industry -- on the planet, on our
                  citizens, and on animals -- demands action. We are calling for
                  an immediate end to the government support of factory farming
                  abuses and the draconian prosecutions of nonviolent activists.
                  And at the heart of this issue, we demand legal protection for
                  animals, including the legal right of all animals to be
                  rescued from situations of distress and exploitation.
                </p>
              </div>
            )}

            <div id="letter-form" style={{ minHeight: 500 }}>
              {/*@ts-ignore*/}
              <dxe-petition petition="one-letter" cta="Sign"></dxe-petition>
              <br />
              <p className="text-white-50 notice text-center">
                By signing, you agree to receive email messages from Direct
                Action Everywhere.
                <br />
                You may unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
