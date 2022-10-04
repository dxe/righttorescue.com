import Script from "next/script";
import React from "react";
import { Container } from "react-bootstrap";

export const TwitterTimeline = () => {
  return (
    <section className="projects-section bg-light">
      <Container>
        <a
          className="twitter-timeline"
          data-height="500"
          href="https://twitter.com/SmithfieldTrial?ref_src=twsrc%5Etfw"
        >
          Tweets by SmithfieldTrial
        </a>
        <Script
          strategy="afterInteractive"
          async
          src="https://platform.twitter.com/widgets.js"
        ></Script>
      </Container>
    </section>
  );
};
