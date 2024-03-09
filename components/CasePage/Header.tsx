import styles from "./Header.module.css";

export const Header = (props: HeaderProps) => {
  function parseRatio(ratio: string): { width: number; height: number } {
    const parts = ratio.match(/\d+/g);
    if (!parts || parts.length !== 2) {
      throw new Error("Invalid ratio format.");
    }
    return {
      width: parseFloat(parts[0]),
      height: parseFloat(parts[1]),
    };
  }

  function isTall(width: number, height: number): boolean {
    return height / width > 1.2;
  }

  var ratio = parseRatio(props.videoRatio);
  var tall = isTall(ratio.width, ratio.height);

  return (
    <section id="sign" className="about-section text-center pb-3">
      <div className="container pt-5 justify-content-center">
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <h1 className="text-white">{props.title}</h1>
          <h5 className="text-white-50 mb-5">{props.location}</h5>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7 py-3">
            <div>
              <div
                className={`ratio ` + styles.headerVideo}
                style={
                  tall
                    ? {
                        aspectRatio: props.videoRatio,
                        // Test cases:  (zoom out if working on small screen)
                        //   With width = 1000px, drag height from 1100px to 200px.
                        //   With height = 1000px, drag width from 1100px to 250px.
                        // In both cases, video should not look too big to start and
                        // only start to shrink as needed. At some point it should
                        // refuse to shrink more so the width is at least 300px.
                        // Aspect ratio should always be maintained.
                        height:
                          `max(min(` +
                          // No taller than would fit vertically on the screen with some extra space for the banner
                          `80vh,` +
                          // No taller than would cause the video to become disproporationately large compared to other content on large screens
                          `800px,` +
                          // No taller than would cause width to exceed 90vh
                          // Do not use max-width explicitly as defining both width and height would override the aspect-ratio.
                          `90vw*${ratio.height}/${ratio.width}), ` +
                          // Most importantly, at least tall enough so that the width will be 300px so Facebook control buttons won't be cut off, e.g. the full screen button.
                          // Do not use max-width explicitly as defining both width and height would override the aspect-ratio.
                          `300px*${ratio.height}/${ratio.width})`,
                      }
                    : {
                        aspectRatio: props.videoRatio,
                      }
                }
              >
                <iframe
                  src={props.video}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: 10 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {props.children && (
            <div className="col-lg-5 py-3 my-auto">
              <h3 className="text-white mb-3">Take Action</h3>
              <p className="text-white">{props.children}</p>
              {props.ctaText1 && props.ctaLink1 && (
                <p className="text-white">
                  <a
                    href={props.ctaLink1}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    {props.ctaText1}
                  </a>
                </p>
              )}
              {props.ctaText2 && props.ctaLink2 && (
                <p className="text-white mb-5">
                  <a
                    href={props.ctaLink2}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    {props.ctaText2}
                  </a>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface HeaderProps {
  title: string;
  location: string;
  video: string;
  videoRatio: string;
  ctaText1?: string;
  ctaLink1?: string;
  ctaText2?: string;
  ctaLink2?: string;
  children?: any;
}
