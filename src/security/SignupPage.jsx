import React from 'react'
import myaxios from '../utils/myaxios'
import { Navigate,useNavigate } from 'react-router-dom'


const SignupPage = () => {
     const navigate = useNavigate();
   
    const formhandler = (e) =>{
       e.preventDefault(); 
       const formdata = new FormData(e.target);
       const data = Object.fromEntries(formdata);
       console.log(data);

       myaxios.post(
        '/user-registration',data
    ).then((response)=>{
        if(response.data.status == 'success'){
           console.log(response.data);
          
           navigate('/Login');
           
        }else{
            console.error(response.data);
        }
       
    }).catch((error)=>{
        console.log(error);
    })

    }

  return (
    <div>
  <body>
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                         
                            <div className="container-fluid m-0 p-0">
                            <form onSubmit={formhandler}>
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input id="email" name='email' placeholder="User Email" className="form-control" type="email"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input id="firstName" name='firstName' placeholder="First Name" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input id="lastName" name='lastName' placeholder="Last Name" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input id="mobile" name='mobile' placeholder="Mobile" className="form-control" type="mobile"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input id="password" name='password' placeholder="User Password" className="form-control" type="password"/>
                                    </div>
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <button type='submit' className="btn mt-3 w-100  bg-gradient-primary">Complete</button>
                                    </div>
                                </div>
                                </form>
                            </div>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default SignupPage
