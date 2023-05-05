import { Row } from "react-bootstrap";
import React from "react";

export const Lawyers = (props: LawyersProps) => {
  return (
    <section
      id="lawyers"
      className="projects-section bg-light"
      style={{ paddingTop: "0px !important", paddingBottom: "2em" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center" style={{ paddingBottom: "2rem" }}>
              <h2>Our Expert Legal Team</h2>
            </div>
          </div>
        </div>

        <Row>
          {props.children}
        </Row>
      </div>
    </section>
  );
};

interface LawyersProps {
  children: any;
}
