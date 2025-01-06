import React, { useEffect } from 'react'
import { useState } from 'react'
import myaxios from '../utils/myaxios'

const Profile = () => {

    const Profiledetail = {
        email : "",
        firstName : "",
        lastName : "",
        mobile : "",
        password : "",

    }

    const [profiledata,setProfile] = useState({
        email : "",
        firstName : "",
        lastName : "",
        mobile : "",
        password : "",

    });  
    console.log(profiledata)
    
    

    useEffect(()=>{
        myaxios.get("user-profile")
        .then((response)=>{
            let api_data = response.data?.data;
            if(api_data){
               setProfile({
                email : api_data.email,
                firstName : api_data.firstName,
                lastName : api_data.lastName,
                mobile : api_data.mobile,
                password : api_data.password
               })

            }else{
                console.error('hola')
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])

   

    const  Updatehandler = (e) =>{
        e.preventDefault();
        
        
       setProfile({...profiledata,[e.target.name]:e.target.value})
       

    }

   const Updatemaker = () =>{
    if(Profiledetail.password === ""){
        delete Profiledetail.password;
    }
    myaxios.post("/user-update",profiledata)
    .then((response)=>{
        if(response.data.status === 'success'){
            console.log(profiledata)
            alert("Updated")
        }else{
            console.error('not')
        }
    }).catch((error)=>{
        console.log(error)
    })
   

   }


   

  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>User Profile</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input id="email" name='email' placeholder="User Email" value={profiledata.email} className="form-control" type="email" onChange={Updatehandler}/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input id="firstName" name='firstName' placeholder="First Name" value={profiledata.firstName} className="form-control" type="text"  onChange={Updatehandler}/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input id="lastName" name='lastName' value={profiledata.lastName} placeholder="Last Name" className="form-control" type="text"  onChange={Updatehandler}/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input id="mobile" name='mobile' placeholder="Mobile" value={profiledata.mobile} className="form-control" type="mobile"  onChange={Updatehandler}/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input id="password" name='password' placeholder="User Password" value={profiledata.password} className="form-control" type="password"  onChange={Updatehandler}/>
                                    </div>
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={Updatemaker} className="btn mt-3 w-100  bg-gradient-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
