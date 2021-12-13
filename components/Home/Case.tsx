import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export const Case = (props: CaseProps) => {
  return (
    <Col>
      <Link href={props.page}>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <Image src={`/img/${props.image}`} height={500} width={700} alt="" />
          {props.past && <div className="past-case-text">Past Case</div>}
        </div>
      </Link>

      <div
        className="featured-text text-center text-lg-left"
        style={{ marginTop: -7 }}
      >
        <Link href={props.page}>
          <h4 style={{ cursor: "pointer" }}>{props.name}</h4>
        </Link>

        <Link href={props.page}>
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
