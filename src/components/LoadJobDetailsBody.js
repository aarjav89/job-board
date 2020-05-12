import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList, faEdit, faCheckCircle, faGraduationCap, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import AppliedModal from "./AppliedModal";
import axios from "axios";

const LoadJobDetailsBody = (props) => {

    const [modalShow, setModalShow] = React.useState(false);

    let id = props.job_id

    const [jobState, editJobState] = useState()
    const [isFetched, editIsFetched] = useState(false)
    const fetchData=async ()=>{
        try{
            const response = await axios.get('http://localhost:5000/api/jobs/'+id)
            //console.log("Resp is : "+response);
            editJobState(response.data)
            editIsFetched(true)


        }catch (e) {

            console.log("ERROR - "+e)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    const LoadComponent = () => {
        if(isFetched) {
            return (

                <div>

                    <div className="row container">
                        <div className="col-lg-12">
                            <h2> <FontAwesomeIcon icon={faList} className="mr-2" />  Job Description </h2>
                            <p> {jobState.job.job_desc}</p>

                            <p>As a {jobState.job.job_title}, you will be required to dress in formal. Maintain code. </p>
                            <br/>
                        </div>
                    </div>

                    <div className="row container">
                        <div className="col-lg-12">
                            <h2> <FontAwesomeIcon icon={faEdit} className="mr-2" />  Responsibilities </h2>
                            <ul className="list-unstyled m-0 p-0">
                                <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>{jobState.job.responsibilities.resp1}</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Report to the Director of Technology and Manager</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Maintain version control on Github</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Maintain exisitng websites and ensure their backup after certain intervals</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Update plug-ins and check for changes throughout the site.</span>
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
                                    <span>Bachelor of Computer Science</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Experience with technologies like VUE JS or React JS is a must (2 years).</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Comfortable with version control like Github</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Fair knowledge of deployment tools like AWS, Firebase or Digital Ocean</span>
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
                                    <span>{jobState.job.benefits.benefit1}</span>
                                </li>
                                <li className="d-flex align-items-start mb-2"> <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-muted" />
                                    <span>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</span>
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
        } // end if isFetched is true
        else {
            return (

                <div>
                    <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" height="200"/>
                    <h3>Loading data, please wait</h3>
                </div>
            )
        } //end else
    }





    return(
        <LoadComponent/>
    )
}

export default LoadJobDetailsBody