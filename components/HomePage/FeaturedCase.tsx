import { Button, Col, Container, Ratio, Row } from "react-bootstrap";
import React from "react";
import Link from "next/link";

export const FeaturedCase = (props: FeaturedCaseProps) => {
  return (
    <Container className="mt-5">
      <Col lg={12}>
        <Col lg={8} className="mx-auto">
          <h5 className="mb-1" style={{ color: "#777777" }}>
            Featured Case
          </h5>
          <h2 className="mb-5">{props.name}</h2>
        </Col>

        <Row>
          <Col lg={6} className="mb-5">
            <Ratio aspectRatio={props.videoRatio}>
              <iframe
                className="embed-responsive-item"
                src={props.video}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Ratio>
          </Col>

          <Col
            lg={6}
            className="mb-5 d-flex flex-column justify-content-center"
          >
            <div>{props.children}</div>
            <p className="text-white mt-4 mb-5 text-center mx-auto">
              <Link href={`/${props.page}`} legacyBehavior>
                <Button>Learn more</Button>
              </Link>
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
FeaturedCase.displayName = "FeaturedCase";

interface FeaturedCaseProps {
  name: string;
  page: string;
  video: string;
  videoRatio: "1x1" | "16x9";
  children: any;
}
