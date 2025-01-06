import React, { useRef, useState } from 'react'
import myaxios from '../../utils/myaxios'
import { errorToast, successToast } from '../../utils/toast'

const CreateUser = ({loaddata}) => {

 

  const closeBtn = useRef(null);


  


 
   
 
  const adduser = (e) =>{
    e.preventDefault()
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);

    myaxios.post("/create-customer",data)
    .then((response)=>{
        if(response.data.status === 201){
            e.target.reset();
            successToast("Customer created successfully");
            closeBtn.current.click();
           loaddata();
        }else{
           
            console.error(response.data)
            errorToast("the critaria is not currect")
            
        }
    }).catch((error)=>{
        console.log(error);
        errorToast("Failed to create customer");
    })
  }


  return (
    <div className="modal animated zoomIn" id="create-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Customer</h5>
                    </div>
                    <div className="modal-body">
                        <form id="save-form"  onSubmit={adduser}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 p-1">
                                        <label className="form-label">Customer Name *</label>
                                        <input type="text" className="form-control" id="customerName" name="name" />
                                        <label className="form-label">Customer Email *</label>
                                        <input type="text" className="form-control" id="customerEmail" name="email"   />
                                        <label className="form-label">Customer Mobile *</label>
                                        <input type="text" className="form-control" id="customerMobile" name="mobile" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button id="modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close" ref={closeBtn} >Close</button>
                        <button type='submit' form="save-form" id="save-btn" className="btn bg-gradient-success">Save</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CreateUser
