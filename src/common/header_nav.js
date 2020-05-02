import React from "react";
import '../assets/css/style.css'

const Header =()=> {

    return(
        <div className="row navbar navbar-expand-lg navbar-light sticky-top bg-white">


                    <div className="col-lg-3 text-center">
                        <a className="navbar-brand" href="#"><img src={require('../assets/img/logo.png')} /></a>
                    </div>

                    <div className="col-lg-6 text-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Find Jobs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-3">
                        <button className="btn head-btn2"> Login / Register </button>


                    </div>



        </div>


    ) // close return
}

export default Header