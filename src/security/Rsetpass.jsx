import React from 'react'
import myaxios from '../utils/myaxios';
import { useNavigate } from 'react-router-dom';

const Rsetpass = () => {
    const navigate = useNavigate();

   const formhandeler = (e) =>{
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);

    myaxios.post('/reset-password',data)
    .then((response)=>{
        if(response.data.status === 'success'){
            console.log(response.data)
            navigate('/Dashboard/dashboard');

        }else{
            console.error('not');
        }
       
    }).catch((error)=>{
        console.log(error);



    });
   };

  return (
    <div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 center-screen">
                <div className="card animated fadeIn w-90  p-4">
                    <form onSubmit={formhandeler}>
                    <div className="card-body">
                        <h4>Reset password</h4>
                        <br/>
                        <label>Ente the new password</label>
                        <input id="password" name='password' placeholder="New password" className="form-control" type="password"/>
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

export default Rsetpass;
