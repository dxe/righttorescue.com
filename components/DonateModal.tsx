import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Script from "next/script";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.VFC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose} size="lg" centered={true}>
      <Modal.Body className="px-2 py-0">
        <Container className="p-0">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
            style={{ position: "absolute", top: 3, right: 3 }}
          />
          <Row className="row g-3 text-center">
            <Col xs={12} lg={6} className="py-0 pb-3 py-md-5">
              <p>We need your help</p>
              <h1 className="pb-2 pb-md-4 px-3">
                Show your support for the right to rescue
              </h1>
              <hr style={{ width: "50%", margin: "auto" }} />
              <p className="py-3 py-md-5">
                Sign up to be a monthly donor today to help the whistleblowers
                facing prison time for exposing factory farm abuses and rescuing
                suffering animals.
              </p>
              <Button
                id="donateModalDonateButton"
                data-formid="8475"
                data-frequency="m"
                onClick={onClose}
              >
                Sign up
              </Button>
            </Col>
            <Col
              xs={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 6 }}
              style={{
                backgroundImage: 'url("/img/duck.jpg")',
                backgroundPositionY: "top",
                backgroundPositionX: "center",
                backgroundSize: "cover",
                minHeight: 300,
              }}
            />
          </Row>
        </Container>
      </Modal.Body>
      <Script
        id="donate-modal-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById("donateModalDonateButton").addEventListener("click", function() {
            dataLayer.push({'event': 'donate-button-clicked'});
          });  
          `,
        }}
      />
    </Modal>
  );
};
