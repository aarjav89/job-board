import React from "react";
import {Link} from "react-router-dom";
import '../assets/css/style.css'

const Header =()=> {

    return(
        <div className="row navbar navbar-expand-lg navbar-light sticky-top bg-white">


                    <div className="col-lg-3 text-center">
                        <Link to="/">
                            <img src={require('../assets/img/logo.png')} alt="" />
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/showJobs" className="nav-link"> Find Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" className="nav-link"> About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-3">
                       <Link to="/login">
                           <button className="btn head-btn2"> Login / Register </button>
                       </Link>


                    </div>



        </div>


    ) // close return
}

export default Header