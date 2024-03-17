import { Col } from "react-bootstrap";

export const Supporter = (props: SupporterProps) => {
  return (
    <Col>
      <div className="tw-bg-white tw-aspect-square tw-p-2 tw-m-4 tw-shadow-lg tw-flex tw-justify-center tw-max-w-[300px] tw-mx-auto">
        <img
          src={`/img/${props.image}`}
          className="tw-w-full tw-h-full tw-object-contain"
          alt={props.name}
        />
      </div>
    </Col>
  );
};

Supporter.displayName = "Supporter";

interface SupporterProps {
  name: string;
  image: string;
}
