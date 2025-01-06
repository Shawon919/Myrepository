import React from 'react'
import myaxios from '../utils/myaxios';
import { Link, useNavigate } from 'react-router-dom';
import { errorToast } from '../utils/toast';

const SigninPage = () => {
    const navigate = useNavigate();
  const formsubmit = (e) =>{
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    

    

    myaxios.post('/user-login',data

    ).then((response)=>{
        if(response.data.status == 'success'){
           console.log(response.data);
           localStorage.setItem('token',response.data.token);
           navigate('/Dashboard/dashboard');
           
        }else{
            console.error(response.data);
            errorToast("password or email is innvalid")
        }
       
    }).catch((error)=>{
        console.log(error);
    })
    
  }

  return (
    <div>
      
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 animated fadeIn col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <form action="" onSubmit={formsubmit}>
                        <div className="card-body">
                            <h4>SIGN IN</h4>
                            <br/>
                            <input id="email" name='email' placeholder="User Email" className="form-control" type="email"/>
                            <br/>
                            <input id="password" name='password' placeholder="User Password" className="form-control" type="password"/>
                            <br/>
                            <button  className="btn w-100 bg-gradient-primary">Next</button>
                            <hr/>
                            <div className="float-end mt-3">
                                <span>
                                    <a className="text-center ms-3 h6" href="userRegistration.html">Sign Up </a>
                                    <span className="ms-1">|</span>
                                    <Link to={'/send-otp'} className="text-center ms-3 h6" href="sendOtp.html">Forget Password</Link>
                                </span>
                            </div>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default SigninPage
