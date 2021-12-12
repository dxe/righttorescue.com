export const Details = (props: DetailsProps) => {
  return (
    <section id="description" className="projects-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2 mx-auto">
            {/*TODO: use next image here (dimensions known or unknown?)*/}
            <img className="img-fluid mb-3" src={`img/${props.image}`} />
          </div>

          <div className="col-lg-7 order-lg-1 my-auto mx-auto">
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DetailsProps {
  image: string;
  children: any;
}
