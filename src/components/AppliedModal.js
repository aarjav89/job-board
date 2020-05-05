import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import {Link} from 'react-router-dom';

const AppliedModal = (props) => {
    return(
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Congratulations...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Your application to XYZ Solutions Inc. for the position of Full stack Developer was successful
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/showJobs" className="btn border-btn2 mr-2">Continue Applying to other Jobs ?</Link>
                    <Button className="btn border-btn2" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    )
}

export default AppliedModal