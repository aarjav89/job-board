import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase, faMapMarkerAlt,faClock,faDollarSign, faClipboard} from '@fortawesome/free-solid-svg-icons'
import AppliedModal from "./AppliedModal";


const LoadJobDetailsHeader = () => {

    const [modalShow, setModalShow] = React.useState(false);


    return(
        <div>


                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center">
                                <div className="border p-2 d-inline-block mr-3 rounded">
                                    <img src={require('../assets/img/some_comp.png')} alt="Image" />
                                </div>
                                <div>
                                    <h2>Product Designer</h2>
                                    <div>
                                        <span className="ml-0 mr-2 mb-2"><FontAwesomeIcon icon={faBriefcase} /> Hiring company</span>
                                        <span className="m-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> Toronto, ON</span>
                                        <span className="m-2"><FontAwesomeIcon icon={faClock} /> Full Time</span>
                                    </div>
                                    <br/>
                                    <div>
                                        <span className="ml-0 mr-2 mb-2"><FontAwesomeIcon icon={faDollarSign} /> 60K - 75K</span>
                                        <span className="m-2"><FontAwesomeIcon icon={faClipboard} /> Appl. Deadline : 5th May, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <a href="#" className="btn border-btn2" onClick={() => setModalShow(true)}>1 - Click Apply</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


            <AppliedModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


        </div> // outermost div
    )
}

export default LoadJobDetailsHeader