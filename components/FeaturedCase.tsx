import { Button, Col, Ratio, Row } from "react-bootstrap";

interface FeaturedCaseProps {
  name: string;
  page: string;
  video: string;
  children: any;
}

export const FeaturedCase = ({
  name,
  page,
  video,
  children,
}: FeaturedCaseProps) => {
  return (
    <Row className="mb-5">
      <Col lg={12}>
        <Col lg={8} className="mx-auto">
          <h5 className="mb-1" style={{ color: "#777777" }}>
            Featured Case
          </h5>
          <h2 className="mb-5">{name}</h2>
        </Col>

        <Row>
          <Col lg={6} className="mb-5">
            <Ratio aspectRatio="16x9">
              <iframe
                className="embed-responsive-item"
                src={video}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Ratio>
          </Col>

          <Col lg={6} className="mb-5">
            <p>{children}</p>
            <p className="text-white mt-4 mb-5 text-center">
              <Button href={page}>Learn more</Button>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
