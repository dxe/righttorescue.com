import { Col } from "react-bootstrap";
import Link from "next/link";

export const Supporter = (props: SupporterProps) => {
  return (
    <Col>
      <div style={{ position: "relative", cursor: "pointer", margin: "1rem" }}>
        <img
          src={`/img/${props.image}`}
          className="img-fluid"
          alt=""
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} // Add shadow
        />
      </div>
    </Col>
  );
};

Supporter.displayName = "Supporter";

interface SupporterProps {
  name: string;
  image: string;
}
