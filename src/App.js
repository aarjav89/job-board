import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'



import Home from "./pages/home";
import Header from "./common/header_nav";
import Footer from "./common/footer";
import Login from "./pages/login";
import ShowJobs from "./pages/showJobs";
import PostJob from "./pages/postJob";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import NotFound from "./pages/404";
import JobDetails from "./pages/jobdetails";
import Register from "./pages/register"

// const [isLoggedIn, editIsLoggedIn] = useState(false);


function App() {
  return (
    <div>

        <Router>
            <Header/>
            <Switch>
            <Route path="/" exact> <Home/> </Route>

            <Route path="/login" exact> <Login/> </Route>

                <Route path="/register" exact> <Register/> </Route>

            <Route path="/showJobs" exact> <ShowJobs/> </Route>

            <Route path="/postJob" exact> <PostJob/> </Route>

            <Route path="/about-us" exact> <AboutUs/> </Route>

            <Route path="/contact-us" exact> <ContactUs/> </Route>

            <Route path="/404" exact> <NotFound/> </Route>

                <Route path="/jobdetails" exact> <JobDetails/> </Route>

            <Redirect to="/404" />
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}


export default App;

