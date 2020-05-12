import React,{useState, useEffect} from "react";
import axios from 'axios'
import Jobcard from '../components/jobcard'


const ShowJobs=()=>{


    const [jobsList, editJobs] = useState([])
    const[isFetched, editIsFetched ] = useState(false);

    useEffect( () => {
        const fetchJobs= async ()=>{

            try{
                const response = await axios.get('http://localhost:5000/api/jobs')

                console.log("response is "+ response)
                editJobs(response.data)
                editIsFetched(true)

            }catch (e) {
                console.log(e)
            }
        }
        fetchJobs()
    },[]);

    const LoadComponent =()=>{

        if(isFetched){

            return (
                <Jobcard jobs={jobsList.jobs}/>

            )
        }else  return (

            <div>
                <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" height="200"/>
                <h3>Loading data, please wait</h3>
            </div>
        )
    }






    return(
        <div>

            <div className="container contact-form" style={{marginTop:'3%',paddingBottom:'3%'}}>
                <div className="contact-image">
                    <img src={require('../assets/img/mascot-rocket.jpg')} alt="rocket_mascot"/>
                </div>

                <form action="post" style={{padding:'0.5%'}}>
                <div className="row text-center">

                        <div className="col-md-4">

                            <input type="text" name="position" placeholder="position" className="form-control"/>
                        </div>
                        <div className="col-md-4">

                            <input type="text" name="location" placeholder="location" className="form-control"/>
                        </div>
                        <div className="col-md-4 text-left">
                            <input type="submit" name="btnUpdate" value="Search" className="btnContact"/>
                        </div>

                </div>
                </form>

            </div>

            <div className="container contact-form" style={{marginTop:'1%',paddingBottom:'3%'}}>
                <LoadComponent/>
            </div>


        </div>
    )
}

export default ShowJobs