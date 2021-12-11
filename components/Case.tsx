import { Col } from "react-bootstrap";
import Image from "next/image";

interface CaseProps {
  name: string;
  location: string;
  page: string;
  image: string;
  past?: boolean;
}

export const Case = ({ name, location, page, image, past }: CaseProps) => {
  return (
    <Col>
      <div style={{ position: "relative" }}>
        <a href={page}>
          <Image src={`/img/${image}`} height={500} width={700} alt="" />
        </a>
        {past && <div className="past-case-text">Past Case</div>}
      </div>

      <div className="featured-text text-center text-lg-left">
        <a href={page}>
          <h4>{name}</h4>
        </a>
        <h5>{location}</h5>
      </div>
    </Col>
  );
};
