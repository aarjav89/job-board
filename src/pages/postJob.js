import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const PostJob=()=>{

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
                <div className="container"> <h1 className="myTitle"> Post Job </h1> </div>
            </div>

            <div className="container contact-form" style={{marginTop:'3%'}}>
                <form method="post" className={{padding:'2%'}}>
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <h2> Job Details </h2><hr/>

                                <label> Upload Featured Image</label><br/>
                                <label className="btn border-btn2"> Browse Image
                                    <input type="file" hidden />
                                </label><br/><br/>

                            <label> Job Title </label><br/>
                            <input type="text" name="job_title" className="form-control"/><br/><br/>



                            <div className="form-group">

                                <Autocomplete
                                    name="location_combo"
                                    options={cities}
                                    getOptionLabel={(option) => option.city}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Select Location" variant="outlined" />}
                                />

                            </div>




                      </div>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default PostJob