import React from "react";


import Hero from "../components/hero";
import Categories from "../components/categories";
import HowItWorks from "../components/howitworks";


const Home =()=>{
    return(
        <div>

            <div className="row">
                <div className="col-lg-12"> <Hero/> </div>
            </div>

            <div className="row">
                <div className="col-lg-12"> <Categories/></div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                <HowItWorks/>
                </div>
            </div>


        </div>
    )
}

export default Home