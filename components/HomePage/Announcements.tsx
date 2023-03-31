import { Container } from "react-bootstrap";
import React, { useState } from "react";

export const Announcements = (props: AnnouncementsProps) => {
  const featuredAnnouncements = React.Children.map(props.children, (child) => {
    return child.props.featured ? child : null;
  });
  const moreAnnouncements = React.Children.map(props.children, (child) => {
    return child.props.featured ? null : child;
  });

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="projects-section bg-light" style={{ paddingTop: 50 }}>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className="mb-5 text-center">Recent Updates</h2>

            <div className="col-lg-10 mx-auto">{featuredAnnouncements}</div>

            <p
              className="text-center pb-4"
              id="read-more-updates"
              style={{ color: "#30609c" }}
            >
              <strong
                onClick={() => setExpanded(!expanded)}
                style={{ cursor: "pointer" }}
              >
                {expanded ? "Read less -" : "Read more +"}
              </strong>
            </p>

            {expanded && (
              <div className="col-lg-10 mx-auto">{moreAnnouncements}</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

interface AnnouncementsProps {
  children: any;
}
