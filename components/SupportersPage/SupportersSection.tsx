import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { Supporter } from "./Supporter";

export const SupportersSection = (props: SupportersProps) => {
  const supportersList = React.Children.map(props.children, (child) =>
    child.type.displayName === "Supporter" ? child : null
  );

  return (
    <section
      id="supporters"
      className="projects-section bg-light"
      style={{ paddingBottom: 40 }}
    >
      <Container>
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="mb-5 text-center" style={{ marginTop: 55 }}>DxE's Right to Rescue campaign is supported by the following cities and coalition groups:</h2>
            <Row xs={1} md={2} lg={3}>
              {supportersList}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

SupportersSection.Supporter = Supporter;

interface SupportersProps {
  children: any;
}

export const SupporterList = (props: SupporterListProps) => props.children;
SupporterList.displayName = "SupporterList";

interface SupporterListProps {
  children: any;
}
