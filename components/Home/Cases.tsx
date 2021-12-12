import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { FeaturedCase } from "./FeaturedCase";

export const Cases = ({ children }: any) => {
  const featuredCase = React.Children.map(children, (child) =>
    child.type.displayName === "FeaturedCase" ? child : null
  );

  const caseList = React.Children.map(children, (child) =>
    child.type.displayName === "CaseList" ? child : null
  );

  return (
    <section
      id="cases"
      className="projects-section bg-light"
      style={{ paddingBottom: 40 }}
    >
      <Container>
        {featuredCase}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="mb-5 text-center">
              {featuredCase.length === 0 ? "All Cases" : "More Cases"}
            </h2>
            <Row xs={1} md={2} lg={3}>
              {caseList}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Cases.FeaturedCase = FeaturedCase;

const CaseList = ({ children }: any) => children;
CaseList.displayName = "CaseList";
Cases.CaseList = CaseList;
