import React from "react";
import '../assets/css/style.css'



const Hero = () =>{

    return(
        <div className="row" style={{height:'830px'}}>
            <div className="col-lg-12 text-center hero">

                <div className="row" style={{height:'250px'}}> <div className="col-6 "></div></div>

                <div className="row">
                    <div className="col-6 ">
                        <div className="hero_caption p-2">
                            <h1> Lets propel your career with our exciting jobs  </h1>
                         </div>
                    </div>

                    <div className="col-7">
                        <form action="#"></form>
                        <div className="row pl-5 ">
                            <div className="col-6 input-form">
                               <input type="text" className="my-input" placeholder="Job title"/>
                            </div>
                            <div className="col-6">
                                <select className="my-select">
                                    <option defaultValue>Choose Region...</option>
                                    <option value="1">Brampton</option>
                                    <option value="2">Mississauga</option>
                                    <option value="1">North York</option>
                                    <option value="2">Toronto</option>
                                    <option value="1">Scarborough</option>
                                    <option value="2">Markham</option>
                                    <option value="1">Kitchener</option>
                                    <option value="2">Waterloo</option>
                                </select>
                            </div>
                        </div>
                        <div className="row pl-5 pt-3 text-center">
                            <div className="col-12">
                                <a href="#" className="my-btn">Find Job</a>
                            </div>

                        </div>


                    </div>




                </div>



            </div>
        </div>


    )
}

export default Hero