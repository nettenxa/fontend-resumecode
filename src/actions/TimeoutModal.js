import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../components/Dashboard/Modal.css";

const TimeoutModal = ({ showModal, togglePopup, handleStayLoggedIn }) => {
  return (
    <div>
      <Modal
        modalClassName="custom-dialog"
        isOpen={showModal}
        toggle={togglePopup}
        keyboard={false}
        // backdrop="static"
      >
        <ModalHeader modalClassName="custom-dialog">
          Session Timeout!
        </ModalHeader>
        <ModalBody>
          Your session is about to expire.
          <br></br>
          You will be redirected to the login page.
        </ModalBody>
        <ModalFooter modalClassName="custom-ModalFooter">
          <Button color="primary" onClick={handleStayLoggedIn}>
            Stay Logged In
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TimeoutModal;
