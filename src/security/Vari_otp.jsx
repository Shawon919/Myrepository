import React from 'react'
import myaxios from '../utils/myaxios';
import { Navigate, useNavigate } from 'react-router-dom';

const Vari_otp = () => {
    const navigate = useNavigate();

    const formhandeler = (e) =>{
        
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        data.email = localStorage.getItem('email')

        myaxios.post('/verify-otp',data)
        .then((response)=>{
            if(response.data.status == 'success'){
                console.log(response.data)
               
                localStorage.setItem('token',response.data.token);
                navigate('/resetpass/')
                

            }else{
                console.error(response.data);
            }
           
        }).catch((error)=>{
            console.log(error);



        })
    }


  return (
        <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90  p-4">
                        <form onSubmit={formhandeler}>
                        <div className="card-body">
                            <h4>OTP</h4>
                            <br/>
                            <label>OTP</label>
                            <input id="otp" name='otp' placeholder="User OTP" className="form-control" type="text"/>
                            <br/>
                            <button type='submit'  className="btn w-100 float-end bg-gradient-primary">Next</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Vari_otp
