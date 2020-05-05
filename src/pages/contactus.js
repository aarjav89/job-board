import React from "react";

const ContactUs=()=>{
    return(
        <div>
            <div className="top-hero" style={{height:'300px'}}>
                <div className="container"> <h1 className="myTitle"> Contact - Us </h1> </div>
            </div>


            <div className="container contact-form">
                <div className="contact-image">
                    <img src={require('../assets/img/mascot-rocket.jpg')} alt="rocket_contact"/>
                </div>
                <form method="post">
                    <h3>Tell us how can we help you ?</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtPhone" className="form-control"
                                       placeholder="Your Phone Number *"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="btnSubmit" className="btnContact" value="Send Message"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *"
                                          style={{width: '100%', height: '150px'}}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default ContactUs