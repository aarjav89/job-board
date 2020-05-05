import React from "react";
import Jobcard from '../components/jobcard'
const ShowJobs=()=>{
    return(
        <div>

            <div className="container contact-form" style={{marginTop:'3%',paddingBottom:'3%'}}>
                <div className="contact-image">
                    <img src={require('../assets/img/mascot-rocket.jpg')} alt="rocket_mascot"/>
                </div>

                <form action="post" style={{padding:'0.5%'}}>
                <div className="row text-center">

                        <div class="col-md-4">

                            <input type="text" name="position" placeholder="position" className="form-control"/>
                        </div>
                        <div className="col-md-4">

                            <input type="text" name="location" placeholder="location" className="form-control"/>
                        </div>
                        <div className="col-md-4 text-left">
                            <input type="submit" name="btnUpdate" value="Search" className="btnContact"/>
                        </div>

                </div>
                </form>

            </div>

            <div className="container contact-form" style={{marginTop:'1%',paddingBottom:'3%'}}>
                <Jobcard/>
            </div>


        </div>
    )
}

export default ShowJobs