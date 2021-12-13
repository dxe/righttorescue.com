import { Col } from "react-bootstrap";
import Link from "next/link";

export const Case = (props: CaseProps) => {
  return (
    <Col>
      <Link href={`/${props.page}`} passHref>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <img src={`/img/${props.image}`} className="img-fluid" alt="" />
          {props.past && <div className="past-case-text">Past Case</div>}
        </div>
      </Link>

      <div className="featured-text text-center text-lg-left">
        <Link href={`/${props.page}`} passHref>
          <h4 style={{ cursor: "pointer" }}>{props.name}</h4>
        </Link>

        <Link href={`/${props.page}`} passHref>
          <h5 style={{ cursor: "pointer" }}>{props.location}</h5>
        </Link>
      </div>
    </Col>
  );
};

interface CaseProps {
  name: string;
  location: string;
  page: string;
  image: string;
  past?: boolean;
}
