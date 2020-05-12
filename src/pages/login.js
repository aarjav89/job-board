import React, {useState} from "react";
import {Link} from "react-router-dom"
import {useForm} from 'react-hook-form'
import axios from 'axios'





const Login=()=>{

    const { register, handleSubmit, errors }  = useForm()
    const [ showMessage, editShowMessage ] = useState(false)
    const [errorMessage, editErrorMessage] = useState(false)

    const onSubmit= async(formData,event)=>{

        editErrorMessage(false);
        editShowMessage(false);
        event.preventDefault();

        try{
            await axios.post('http://localhost:5000/api/users/authenticate',formData).then(response => {

                if(response.status === 200){
                    editShowMessage(true);
                    //this.props.history.push('/');
                }
                else{
                    const error = new Error(response.error)
                    throw error
                }
            })

        }
        catch(err) {
            console.error(err);
            editErrorMessage(true);
        };

    }

    const ShowErrorMessage=()=>{
        if(errorMessage){
            return(
                <div className="alert alert-danger">
                    <strong>Whoops!</strong> Error logging you in, Please try again later.
                </div>
            )
        }

        return "";

    }


    const ShowMessage=()=>{
        if(showMessage){
            return(
                <div className="alert alert-success">
                    <strong>Yippe!</strong> Authentication Successful. Redirecting...
                </div>
            )
        }

        return "";

    }




    return(
        <div>
            <div className="top-hero" style={{height:'300px'}}>
                <div className="container"> <h1 className="myTitle"> Login / SignUp </h1> </div>
            </div>



    <div className="container contact-form">
        <div className="contact-image">
            <img src={require('../assets/img/mascot-rocket.jpg')} alt="rocket_mascot"/>
        </div>


        <div className="row container text-center">
            <div className="col-md-6" style={{borderRight:'5px, solid, black'}}>
                <form method="post">
                <h3>No Account ? Lets register you first...</h3>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link to="/register" className="btnContact"> Register  </Link>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-md-6">
                <ShowErrorMessage/><ShowMessage/>
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <h3> Login form</h3>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Your Email address" ref={register({required:true})}/>
                        {errors.email && <p className="error"><strong>Please enter a value for email</strong></p>}
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" name="password" ref={register({required:true})} placeholder="Your Password"/>
                        {errors.password && <p className="error"><strong>Please enter a value for password</strong></p>}
                    </div>

                    <input type="submit" name="btnReg" className="btnContact" value="Login"/>
                </form>
            </div>
        </div>


    </div>


        </div>


    )
}

export default Login