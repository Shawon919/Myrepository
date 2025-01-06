import React from 'react'
import { Link,Navigate,Outlet } from 'react-router-dom'
import { useState } from 'react'
import NavBer from '../NewLayer/NavBer';
import SideBar from '../NewLayer/SideBar';


const DasboardLayout = () => {
   
  const [IsnavOpen,setValue] = useState(true);
  const token = localStorage.getItem('token');

  if(!token) return <Navigate to='/Login/' />;

  const Changevalue = () =>{
    setValue(!IsnavOpen);
  }


  return (
    <>

     <NavBer navHandler={Changevalue} />
    
     <div  id="sideNavRef" className={IsnavOpen ? "side-nav-open" : "side-nav-close"} >
     <SideBar/>
     </div>
    <div id="contentRef" className={IsnavOpen ? "content" : "content-expand"} >
    <Outlet/>
    </div>
    
       
    </>
  )
}

export default DasboardLayout
