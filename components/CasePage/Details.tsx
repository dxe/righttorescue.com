export const Details = (props: DetailsProps) => {
  return (
    <section id="description" className="projects-section bg-light">
      <div className="container">
        <div className="row">
          {props.image && (
            <div className="col-lg-5 order-lg-2 mx-auto">
              <img className="img-fluid mb-3" src={`img/${props.image}`} alt="" />
            </div>
          )}

          <div
            className={`${
              props.image ? "col-lg-7" : "col-lg-12"
            } order-lg-1 my-auto mx-auto details-children-wrapper`}
          >
            <style>{`
              .details-children-wrapper h4 { margin-top: 40px; margin-bottom: 10px; }
          `}</style>
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DetailsProps {
  image?: string;
  children: any;
}
