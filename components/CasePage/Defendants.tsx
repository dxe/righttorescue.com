import { Row } from "react-bootstrap";
import React from "react";

export const Defendants = (props: DefendantsProps) => {
  const defendantCount = React.Children.count(props.children);

  return (
    <section
      id="cases"
      className="projects-section bg-light"
      style={{ paddingTop: "0px !important" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center" style={{ paddingBottom: "2rem" }}>
              <h2>
                Meet the {defendantCount > 1 ? "Defendants" : "Defendant"}
              </h2>
            </div>
          </div>
        </div>

        <Row
          xs={1}
          md={defendantCount > 1 ? 2 : 1}
          lg={defendantCount > 2 ? 3 : defendantCount > 1 ? 2 : 1}
          className="justify-content-center"
        >
          {props.children}
        </Row>
      </div>
    </section>
  );
};

interface DefendantsProps {
  children: any;
}
