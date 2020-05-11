import React, {useState} from "react";
import {useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
const Register=()=>{

    const { register, handleSubmit, errors } = useForm();

    const [showMessage, editShowMessage] = useState(false)
    const [errorMessage, editErrorMessage] = useState(false)

    const Message=()=>{
        if(showMessage){
            return(
                <div className="alert alert-success">
                    <strong>Success!</strong> Author added!
                </div>
            )
        }

        return "";

    }

    const ShowErrorMessage=()=>{
        if(errorMessage){
            return(
                <div className="alert alert-danger">
                    <strong>Whoops!</strong> Something went wrong, Please try again later.
                </div>
            )
        }

        return "";

    }

    const onSubmit=  async (formData,event)=> {
        editShowMessage(false)
        editErrorMessage(false)
        console.log(formData)

        try {

            await axios.post('http://localhost:5000/api/users/register', formData)
            editShowMessage(true)


        } catch (e) {
            editErrorMessage(true)

        }
    }
    const cities = [
        { city: 'Toronto', year: 1994 },
        { city: 'Brampton', year: 1972 },
        { city: 'North York', year: 1974 },
        { city: 'Kitchener', year: 2008 },
        { city: 'Waterloo', year: 1957 },
        { city: "Scarborough", year: 1993 },
        { city: 'Markham', year: 1994 }
    ]

    return(
        <div>
            <div className="top-hero" style={{height:'300px'}}>
                <div className="container"> <h1 className="myTitle"> Register User </h1> </div>
            </div>

            <div className="container contact-form" style={{marginTop:'3%'}}>


                <Message/>
                <ShowErrorMessage/>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Basic Details</h2><hr/>
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder="First name" name="first_name" ref={register({required: true, maxLength: 80})} />
                   </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last name" name="last_name" ref={register({required: true, maxLength: 100})} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="password" ref={register({required: true, max: 10, min: 6})} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password" name="Confirm Password" ref={register({required: true, max: 10, min: 6})} />
                    </div>

                    <div className="form-group"> <label> Role &nbsp;&nbsp;</label>
                        <label> <input name="role"  className="form-control" type="radio" value="Applicant" ref={register({ required: true })}/> Applicant </label> &nbsp;&nbsp;

                        <label> <input name="role" className="form-control" type="radio" value="Recruiter" ref={register({ required: true })}/> Recruiter </label>
                    </div>

                    <h2>Mailing Details</h2><hr/>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Street Address" name="address_line" ref={register({required: true, min: 3})} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="City" name="city" ref={register({required: true, max: 3, min: 15})} />
                    </div>

                    <div className="form-group">
                        <select className="form-control" name="province" ref={register({ required: true })}>
                            <option value="Ontario">Ontario</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value=" Quebec"> Quebec</option>
                            <option value=" Saskatchewan"> Saskatchewan</option>
                            <option value="Manitoba">Manitoba</option>
                         </select>
                    </div>

                    <div className="form-group">
                         <input type="text" className="form-control" placeholder="Zip" name="zip" ref={register({required: true, max: 7, min: 6})} />
                    </div>

                    <div className="form-group">
                        <input type="tel" className="form-control" placeholder="Mobile number" name="phone" ref={register({required: true, maxLength: 12})} />
                    </div>

                    <div className="form-group">
                        <textarea name="summary_line" placeholder="Enter your headline" className="form-control" ref={register} />
                    </div>

                    <h2>Experience</h2><hr/>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Company Name" name="company1" ref={register} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Position" name="position1" ref={register} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Location" name="loc1" ref={register} />
                    </div>

                    <div className="form-group">
                        <textarea name="job_desc1" placeholder="Enter your Job Description" className="form-control" ref={register} />
                    </div>

                    <div className="form-group">
                         <input type="datetime" placeholder="Start Date" name="start_date" ref={register} />
                    &nbsp; &nbsp;
                        <input type="datetime" placeholder="End  Date" name="start_date" ref={register} />
                    </div>

                    <h2>Education</h2><hr/>


                    <div className="form-group">
                        <input type="text" placeholder="Education" className="form-control" name="education1" ref={register} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Institute Name" name="institution1" ref={register} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Institute Location" className="form-control" name="location1" ref={register} />
                    </div>

                    <div className="form-group">
                        <select className="form-control" name="degree_awarded1" ref={register}>
                            <option value="select">-- Select Degree Awarded --</option>
                            <option value="Certificate">Certificate</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                         </select>
                    </div>

                    <h2>Certificate</h2><hr/>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Certificate Name" name="certificate1" ref={register} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Awarded By" name="awarded_by1" ref={register} />
                    </div>

                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Certificate Expiry Year" name="cert_exp_year1" ref={register} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Expected Salary" name="exp_salary" ref={register} />
                    </div>

                    <div className="form-group"> <label> Willingness to Relocate &nbsp;&nbsp;</label>
                        <label> <input name="relocate_pref"  className="form-control" type="radio" value="Yes" ref={register({ required: true })}/> Yes </label> &nbsp;&nbsp;

                        <label> <input name="relocate_pref" className="form-control" type="radio" value="No" ref={register({ required: true })}/> No </label>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btnContact" />
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Register