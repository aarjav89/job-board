import React from "react";
import Header from "../common/header_nav";
import Hero from "../components/hero";
import Categories from "../components/categories";
import HowItWorks from "../components/howitworks";
import Footer from "../common/footer";

const Home =()=>{
    return(
        <div>
            <Header/>
            <Hero/>
            <Categories/>
            <HowItWorks/>
            <Footer/>

        </div>
    )
}

export default Home