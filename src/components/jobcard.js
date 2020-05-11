import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Jobcard = () => {
    return(
        <div style={{padding:'2%'}}>


            <ul className="job-listings mb-5">
                <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                    <Link to="/jobdetails">

                    </Link>
                    <div className="job-listing-logo">
                        <img src={require('../assets/img/some_comp.png')} alt="" className="img-fluid" />
                    </div>

                    <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                            <h2>Full Stack Web Developer</h2>
                            <strong>Some Company Name</strong><br/>
                            <strong>$60,000-$75,000</strong>
                        </div>
                        <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Toronto , ON
                        </div>
                        <div className="job-listing-meta">
                            <span className="badge badge-danger">Part Time</span>
                        </div>
                    </div>
                </li>




            </ul>


        </div> // outermost div

    )
}

export default Jobcard