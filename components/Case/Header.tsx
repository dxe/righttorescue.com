export const Header = (props: HeaderProps) => {
  // TODO: handle props like this in other components too
  return (
    <section id="sign" className="about-section text-center">
      <div className="container">
        <br />
        <h1 className="text-white">{props.title}</h1>
        <h5 className="text-white-50 mb-5">{props.location}</h5>

        <div className="row">
          <div className="col-lg-7 mb-5">
            <div className={`ratio ratio-${props.videoRatio}`}>
              {/*TODO: ensure this works w/ FB or YT*/}
              <iframe
                className="embed-responsive-item" // TODO: do we need this?
                src={props.video}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 10 }}
              ></iframe>
            </div>
          </div>

          <div className="col-lg-5 my-auto">
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
  children: any;
}
