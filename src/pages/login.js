import React from "react";
import {Link} from "react-router-dom"

const Login=()=>{
    return(
        <div>
            <div className="top-hero" style={{height:'300px'}}>
                <div className="container"> <h1 className="myTitle"> Login / SignUp </h1> </div>
            </div>



    <div className="container contact-form">
        <div className="contact-image">
            <img src={require('../assets/img/mascot-rocket.jpg')} alt="rocket_mascot"/>
        </div>


        <div className="row container text-center">
            <div className="col-md-6" style={{borderRight:'5px, solid, black'}}>
                <form method="post">
                <h3>No Account ? Lets register you first...</h3>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link to="/register" className="btnContact"> Register  </Link>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-md-6">
                <form action="post">
                <h3> Login form</h3>
                    <div className="form-group">
                        <input type="email" className="form-control" name="login_email" placeholder="Your Email address"/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" name="login_pass" placeholder="Your Password"/>
                    </div>

                    <input type="submit" name="btnReg" className="btnContact" value="Login"/>
                </form>
            </div>
        </div>


    </div>


        </div>


    )
}

export default Login