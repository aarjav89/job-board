import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList, faEdit, faCheckCircle, faGraduationCap, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import AppliedModal from "./AppliedModal";

const LoadJobDetailsBody = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div>

            <div className="row container">
                <div className="col-lg-12">
                    <h2> <FontAwesomeIcon icon={faList} className="mr-2" />  Job Description </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus.</p>
                    <p>Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
                    <br/>
                </div>
            </div>

            <div className="row container">
                <div className="col-lg-12">
                    <h2> <FontAwesomeIcon icon={faEdit} className="mr-2" />  Responsibilities </h2>
                    <ul className="list-unstyled m-0 p-0">
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Necessitatibus quibusdam facilis</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Commodi quae ipsum quas est itaque</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Deleniti asperiores blanditiis nihil quia officiis dolor</span>
                        </li>
                    </ul>
                    <br/>
                </div>
            </div>


            <div className="row container">
                <div className="col-lg-12">
                    <h2> <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />  Education + Experience </h2>
                    <ul className="list-unstyled m-0 p-0">
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Necessitatibus quibusdam facilis</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Commodi quae ipsum quas est itaque</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Deleniti asperiores blanditiis nihil quia officiis dolor</span>
                        </li>
                    </ul>
                    <br/>
                </div>
            </div>


            <div className="row container">
                <div className="col-lg-12">
                    <h2> <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-2" />  Benefits </h2>
                    <ul className="list-unstyled m-0 p-0">
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Necessitatibus quibusdam facilis</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Commodi quae ipsum quas est itaque</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                        </li>
                        <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                            <span>Deleniti asperiores blanditiis nihil quia officiis dolor</span>
                        </li>
                    </ul>
                    <br/>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-6">
                    <a href="#" className="btn border-btn2" onClick={() => setModalShow(true)}>1 - Click Apply</a>
                </div>
            </div>


            <AppliedModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />





        </div> // outermost div
    )
}

export default LoadJobDetailsBody