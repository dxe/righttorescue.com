import { Link } from "react-scroll";

export const MastHead = ({ image, takeActionPage }: any) => {
  return (
    <header
      className="masthead"
      style={{
        background: `linear-gradient(to bottom,rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%),
                      url("/img/${image}")`,
        backgroundColor: "#161616",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
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
            Support the Right to Rescue
          </h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5 fade-in-second">
            Help the whistleblowers facing prison time for exposing factory farm
            abuses and rescuing suffering animals
          </h2>

          <Link
            activeClass="active"
            className="btn btn-primary mx-2 fade-in-third"
            to="sign"
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Sign Now
          </Link>

          {takeActionPage && (
            <a
              href={takeActionPage}
              className="btn btn-secondary mx-2 fade-in-third"
            >
              Take Action
            </a>
          )}
        </div>
        -
      </div>
    </header>
  );
};
