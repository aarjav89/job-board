import React from "react";
import LoadJobDetailsHeader from "../components/LoadJobDetailsHeader";
import LoadJobDetailsBody from "../components/LoadJobDetailsBody";

const JobDetails=()=>{
    return(
        <div>
                <div className="container contact-form" style={{marginTop:'3%',padding:'2%'}}>
                    <LoadJobDetailsHeader/>
                </div>

                <div className="container contact-form" style={{marginTop:'2%',padding:'2%'}}>
                    <LoadJobDetailsBody/>
                </div>
        </div>
    )
}

export default JobDetails