import React from "react";
import { Container } from "react-bootstrap";
import Script from "next/script";

declare global {
  interface Window {
    twttr: any;
  }
}

interface TwitterTimelineProps {
  twitterHandle: string;
  numberOfTweets?: number;
  width?: string | number;
  height?: string | number;
  title?: string;
}

const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  twitterHandle,
  numberOfTweets = 4,
  width = "auto",
  height = "900",
  title = "",
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const timelineRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (!isLoaded) return;
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(timelineRef.current);
    }
  }, [isLoaded]);

  return (
    <section className="projects-section bg-light">
      <Script
        id="twitter-widgets"
        async
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />
      <Container>
        <div style={{ width }} suppressHydrationWarning>
          <h3>{title}</h3>
          <a
            ref={timelineRef}
            className="twitter-timeline"
            data-height={height}
            data-tweet-limit={numberOfTweets}
            href={`https://twitter.com/${twitterHandle}`}
          ></a>
        </div>
      </Container>
    </section>
  );
};

export default TwitterTimeline;
