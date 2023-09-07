import Script from "next/script";
import React from "react";
import { Container } from "react-bootstrap";

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
  width = 'auto',
  height = '900',
  title = ''
}) => {

  const timelineRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(timelineRef.current);
    }
  }, [twitterHandle, numberOfTweets, width, height, title]);

  return (
    <section className="projects-section bg-light">
      <Container>
        <div style={{ width }}>
          <h3>{title}</h3>
          <a
            ref={timelineRef}
            className="twitter-timeline"
            data-height={height}
            data-tweet-limit={numberOfTweets}
            href={`https://twitter.com/${twitterHandle}`}
          >
          </a>
        </div>
      </Container>
    </section>
  );
};

export default TwitterTimeline;
