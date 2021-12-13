import { Col } from "react-bootstrap";

export const Bio = (props: BioProps) => {
  return (
    <Col>
      <img
        className={`mb-3 mb-lg-0 ${props.circle ? "lawyer" : ""}`}
        style={{ width: "100%" }}
        src={`img/${props.image}`}
        alt=""
      />
      <div
        className={`${
          props.circle ? "featured-text-law" : "featured-text"
        } text-lg-left`}
      >
        <h4>{props.name}</h4>
        <p className="text-black-50 mb-0">{props.children}</p>
      </div>
    </Col>
  );
};

interface BioProps {
  name: string;
  image: string;
  children: any;
  circle?: boolean;
}
