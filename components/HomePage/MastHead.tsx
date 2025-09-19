import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { Button } from "react-bootstrap";

export const MastHead = (props: MastHeadProps) => {
  return (
    <header
      className="masthead tw-bg-[33%] sm:tw-bg-center tw-bg-cover tw-bg-no-repeat tw-bg-[#161616]"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(22, 22, 22, 0.5) 0%, rgba(22, 22, 22, 0.85) 75%, #161616 100%),
                      url("/img/${props.image}")`,
      }}
    >
      <div
        className="
          container
          d-flex
          h-100
          align-items-center
          flex-column
          justify-content-center
        "
      >
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase fade-in-first">
            An activist rescued chickens from abuse at a Perdue slaughterhouse
          </h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5 fade-in-second">
            Now, she's facing years in jail.
          </h2>

          <ScrollLink
            activeClass="active"
            className="btn btn-primary mx-2 fade-in-third"
            to="sign"
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Sign the Letter
          </ScrollLink>

          {props.takeActionPage && (
            <Link href={`/${props.takeActionPage}`} legacyBehavior>
              <Button variant="secondary" className="mx-2 my-2 fade-in-third">
                Take Action
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

interface MastHeadProps {
  image: string;
  takeActionPage?: string;
}
