import { Col, Container, Ratio, Row } from "react-bootstrap";

export const About = (props: AboutProps) => {
  return (
    <Container className="mt-5">
      <Col lg={12}>
        <h2 className="mb-5 text-center">About the Right to Rescue</h2>
        <Row>
          <Col lg={6} className="mb-5">
            {props.children}
          </Col>

          <Col lg={6} className="mb-5">
            <Ratio aspectRatio={props.videoRatio}>
              <iframe
                className="embed-responsive-item"
                src={props.video}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                // loading="lazy"
              ></iframe>
            </Ratio>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
About.displayName = "About";

interface AboutProps {
  name: string;
  video: string;
  videoRatio: "1x1" | "16x9";
  children: any;
}
