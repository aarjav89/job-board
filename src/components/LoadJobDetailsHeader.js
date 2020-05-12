import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase, faMapMarkerAlt,faClock,faDollarSign, faClipboard} from '@fortawesome/free-solid-svg-icons'
import AppliedModal from "./AppliedModal";
import axios from 'axios'


const LoadJobDetailsHeader = (props) => {

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
        if(isFetched){
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
                                        <h2>{jobState.job.job_title}</h2>
                                    <div>
                                        <span className="ml-0 mr-2 mb-2"><FontAwesomeIcon icon={faBriefcase} /> {jobState.job.comp_name}</span>
                                        <span className="m-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> {jobState.job.location},{jobState.job.province}</span>
                                        <span className="m-2"><FontAwesomeIcon icon={faClock} /> Full Time</span>
                                    </div>
                                    <br/>
                                    <div>
                                        <span className="ml-0 mr-2 mb-2"><FontAwesomeIcon icon={faDollarSign} /> {jobState.job.salary_range}</span>
                                        <span className="m-2"><FontAwesomeIcon icon={faClipboard} /> Appl. Deadline : 12th May, 2020</span>
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

                </div>

            )
        } // end isFetched true
        else {
            return (

            <div>
                <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" height="200"/>
                    <h3>Loading data, please wait</h3>
                </div>
            )
        }
    }


    const [modalShow, setModalShow] = React.useState(false);


    return(
        <div>
            <LoadComponent/>


        </div> // outermost div
    )
}

export default LoadJobDetailsHeader