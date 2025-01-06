import React, { useEffect, useRef, useState } from 'react'
import myaxios from '../utils/myaxios'
import CreateUser from './Customerattribute/CreateUser';
import Updateuser from './Customerattribute/Updateuser';
import DeleteUser from './Customerattribute/DeleteUser';
import { makeDataTable,destroyDataTable } from '../utils/datatable';



const CustomerLIst = () => {
    const [isloading, setIsLoading] = useState(true);
    const [data,setData] = useState([]);
    const [iddelete,setIddelete] = useState(null);
    const DataTable = useRef(null);
    const [updatevalue,setUpdatevalue] = useState({
        name : "",
        email : "",
        mobile : "",

    })

    

    const changehandler = (Itemid) =>{
         Itemid = parseInt(Itemid);
         const item = data.find((item)=>item.id === Itemid);
         setUpdatevalue({...item});
    }
    
   
  
    
   const deletehandle = (ID) =>{
    setIddelete(ID)
   }
   
    const loaddata = () => {
        setIsLoading(true);
        myaxios.get("/list-customer")
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    useEffect(()=>{
      const dt= makeDataTable(DataTable.current);
       return () =>{
       destroyDataTable(dt);
       }
    },[data])



    useEffect(()=>{
        loaddata();
    },[]);


   


  if (isloading){
    return (<h1>the page is loading...</h1>)
  }



  return (


   <>
     <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <div className="card px-5 py-5">
                        <div className="row justify-content-between ">
                            <div className="align-items-center col">
                                <h4>Customer</h4>
                            </div>
                            <div className="align-items-center col">
                                <button data-bs-toggle="modal" data-bs-target="#create-modal" className="float-end btn m-0 bg-gradient-primary">Create</button>
                            </div>
                        </div>
                        <hr className="bg-dark " />

                        <table className="table" id="tableData" ref={DataTable} >
                            <thead>
                                <tr className="bg-light">
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="tableList">
                                {
                                    data.map((item, index) => (
                                        <tr key={item.id} className={index % 2 === 0 ? "even" : "odd"}>
                                            <td className="sorting_1">{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>
                                                <button data-bs-toggle="modal" data-bs-target="#update-modal" type="button" className="btn editBtn btn-sm btn-outline-success" onClick={(e)=>changehandler(item.id)}>Edit</button>
                                                <button data-bs-toggle="modal" data-bs-target="#delete-modal" type="button" className="btn deleteBtn btn-sm btn-outline-danger" onClick={(e) => deletehandle(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            <CreateUser loaddata={loaddata} />
            <Updateuser data={updatevalue} loaddata={loaddata}/>
            <DeleteUser data={iddelete} loaddata={loaddata}/>  
           
            

        </>
  )
}

export default CustomerLIst
