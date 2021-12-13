import { Col } from "react-bootstrap";

export const Bio = (props: BioProps) => {
  return (
    <Col>
      {/*TODO: figure out if you can use next image component & have it scale depending on # of cols */}
      {/*Note that you'll prob also need to put a marginTop of -7 on the featured-text element too*/}
      {/*<Image src={`/img/${props.image}`} height={500} width={700}  alt="" />*/}
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
