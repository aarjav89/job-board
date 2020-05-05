import React from "react";

const AboutUs=()=>{
    return(
        <div>
            <div className="top-hero" style={{height:'300px'}}>
                <div className="container"> <h1 className="myTitle"> About Us </h1> </div>
            </div>

            <div className="container contact-form" style={{marginTop:'3%',padding:'2%'}}>
                <div className="row">
                    <div className="col-lg-12 mb-2">
                        <h2> Our Story </h2>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default AboutUs