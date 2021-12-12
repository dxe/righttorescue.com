import { Col } from "react-bootstrap";
import Image from "next/image";

export const Defendant = (props: DefendantProps) => {
  return (
    <Col>
      {/*TODO: figure out if you can use next image component & have it scale depending on # of cols */}
      {/*Note that you'll prob also need to put a marginTop of -7 on the featured-text element too*/}
      {/*<Image src={`/img/${props.image}`} height={500} width={700}  alt="" />*/}
      <img
        className="img-fluid mb-3 mb-lg-0"
        src={`img/${props.image}`}
        alt=""
      />
      <div className="featured-text text-center text-lg-left">
        <h4>{props.name}</h4>
        <p className="text-black-50 mb-0">{props.children}</p>
      </div>
    </Col>
  );
};

interface DefendantProps {
  name: string;
  image: string;
  children: any;
}
