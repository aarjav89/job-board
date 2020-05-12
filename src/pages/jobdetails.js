import React from "react";
import {useParams} from 'react-router-dom'
import LoadJobDetailsHeader from "../components/LoadJobDetailsHeader";
import LoadJobDetailsBody from "../components/LoadJobDetailsBody";

const JobDetails=()=>{

    let {id} = useParams(); // using this id, we pass it as a prop to details-header and details-body
    console.log("job_id is"+id);
    return(
        <div>
                <div className="container contact-form" style={{marginTop:'3%',padding:'2%'}}>
                    <LoadJobDetailsHeader job_id={id}/>
                </div>

                <div className="container contact-form" style={{marginTop:'2%',padding:'2%'}}>
                    <LoadJobDetailsBody job_id={id}/>
                </div>
        </div>
    )
}

export default JobDetails