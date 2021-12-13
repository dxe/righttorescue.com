import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section id="social" className="contact-section bg-black">
        <div className="container">
          {/*TODO: get font awesome icons working*/}

          <div className="social d-flex justify-content-center">
            <a
              href="http://twitter.com/dxeverywhere"
              className="mx-2"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                style={{ maxWidth: 30 }}
              />
            </a>
            <a
              href="http://facebook.com/directactioneverywhere"
              className="mx-2"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ maxWidth: 30 }}
              />
            </a>
            <a
              href="http://instagram.com/directactioneverywhere"
              className="mx-2"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ maxWidth: 30 }}
              />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black small text-center text-white-50">
        <div className="container">
          Copyright &copy; Direct Action Everywhere {currentYear}
        </div>
      </footer>
    </>
  );
};
