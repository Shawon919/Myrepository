import React from 'react'
import myaxios from '../utils/myaxios';
import { useNavigate } from 'react-router-dom';

const SendOtp = () => {

    const nevigate =useNavigate();
  
    const formhandeler = (e) =>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        console.log(data)

        myaxios.post('send-otp',data)
        .then((response)=>{
            if(response.data.status == 'success'){
                console.log(response.data)
                localStorage.setItem('email',data.email);
                nevigate('/varify-otp');
            }else{
                console.error(response.data);
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
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90  p-4">
                        <form onSubmit={formhandeler}>
                        <div className="card-body">
                            <h4>EMAIL ADDRESS</h4>
                            <br/>
                            <label>Your email address</label>
                            <input id="email" name='email' placeholder="User Email" className="form-control" type="email"/>
                            <br/>
                            <button type='submit'  className="btn w-100 float-end bg-gradient-primary">Next</button>
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

export default SendOtp
