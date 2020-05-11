import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm } from 'react-hook-form';
import axios from "axios";

const PostJob=()=>{

    const { register, handleSubmit, errors } = useForm();
    const [errorMessage, editErrorMessage] = useState(false)

    const onSubmit=  async (formData,event)=> {
        editErrorMessage(false)
        alert("job title is:"+formData.job_title)
        console.log(formData)

        try {

            await axios.post('http://localhost:5000/api/jobs/register', formData)

        } catch (e) {
            editErrorMessage(true)

        }
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

    // const provinces = [
    //     { province: 'British Columbia' },
    //     { province: 'Alberta' },
    //     { province: 'Saskatchewan'},
    //     { province: 'Manitoba' },
    //     { province: 'Ontario'},
    //     { province: "Quebec" },
    //     { province: 'New Foundland' }
    //     ]

    return(
        <div>
            <div className="top-hero" style={{height:'300px'}}>
                <div className="container"> <h1 className="myTitle"> Post Job </h1> </div>
            </div>

            <div className="container contact-form" style={{marginTop:'3%'}}>
                <ShowErrorMessage/>

                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <form method="post" className={{padding:'2%'}} onSubmit={handleSubmit(onSubmit)}>
                            <h2> Job Details </h2><hr/>

                                <label> Upload Logo Image (Size : 150px x 150px) </label><br/>
                                <label className="btn border-btn2"> Browse Image
                                    <input type="file" hidden />
                                </label><br/><br/>

                           <div className="form-group">
                            <label> Job Title </label><br/>
                            <input type="text" name="job_title" className="form-control"/>
                           </div>

                            <div className="form-group">
                                <label> Location </label><br/>
                                <input type="text" name="location" className="form-control"/>
                            </div>



                            <div className="form-group">
                                <label> Province  </label><br/>
                                {/*<Autocomplete*/}
                                {/*    name="location_combo"*/}
                                {/*    options={provinces}*/}
                                {/*    getOptionLabel={(option) => option.province}*/}
                                {/*    style={{ width: 300 }}*/}
                                {/*    renderInput={(params) => <TextField {...params} label="Select Location" variant="outlined" />}*/}
                                {/*/>*/}
                                <select name="province" className="form-control">
                                    <option value="Ontario">Ontario</option>
                                    <option value="Alberta">Alberta</option>
                                    <option value="British Columbia">British Columbia</option>
                                    <option value="Manitoba">Manitoba</option>
                                    <option value="Quebec">Quebec</option>
                                </select>
                            </div>

                                <div className="form-group">

                                      <textarea className="form-control" name="job_desc" placeholder="Job Description" ref={register({required: true})} />
                                </div>

                            <div className="form-group">

                                <input type="text" className="form-control" placeholder="Salary Range" name="salary_range" ref={register({required: true})} />
                            </div><br/>

                            <h2> Company Details </h2><hr/>

                                <div className="form-group">

                                      <input type="text" className="form-control" placeholder="Company Name" name="comp_name" ref={register({required: true})} />
                                </div>

                            <div className="form-group">

                                <textarea className="form-control" placeholder="Company Description" name="comp_desc" ref={register({required: true})} />
                            </div>

                            <div className="form-group">

                                <input type="url" className="form-control" placeholder="Website" name="website" ref={register} />
                            </div>




                                <div className="form-group">

                                      <textarea name="responsibilities" className="form-control" placeholder="Job Responsibilities" ref={register} />
                                </div>
                                <div className="form-group">

                                      <textarea name="qualifications Needed"  className="form-control" placeholder="Qualifications Needed" ref={register} />
                                </div>
                                <div className="form-group">

                                      <textarea name="benefits" className="form-control" placeholder="Benefits provided" ref={register} />
                                </div>

                            <div className="form-group">
                                <input type="submit" className="btnContact" value="Post Job" />
                            </div>


                            </form>


                      </div>
                    </div>

            </div>
        </div>
    )
}



export default PostJob