import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

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
      <Link href={page}>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <Image src={`/img/${image}`} height={500} width={700} alt="" />
          {past && <div className="past-case-text">Past Case</div>}
        </div>
      </Link>

      <div
        className="featured-text text-center text-lg-left"
        style={{ marginTop: -7 }}
      >
        <Link href={page}>
          <h4 style={{ cursor: "pointer" }}>{name}</h4>
        </Link>

        <Link href={page}>
          <h5 style={{ cursor: "pointer" }}>{location}</h5>
        </Link>
      </div>
    </Col>
  );
};
