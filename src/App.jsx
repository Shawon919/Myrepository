import React from 'react'

import SignupPage from './security/SignupPage'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SigninPage from './security/SigninPage';
import Dashboard from './componenets/Dashboard';
import DasboardLayout from './Layout/DasboardLayout';
import SendOtp from './security/SendOtp';
import Product from './componenets/Product';
import Logout from './security/Logout';
import Create from './componenets/Create';
import Vari_otp from './security/Vari_otp';
import Rsetpass from './security/Rsetpass';
import CustomerLIst from './componenets/CustomerLIst';
import Update from './componenets/Update';
import Profile from './security/Profile';







const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={ <SignupPage/>}/>
        <Route path='/Login' element={ <SigninPage/>}/>
        <Route path='Logout/' element={<Logout/>}/>
        <Route path='/send-otp' element={<SendOtp/>}/>
        <Route path='/varify-otp' element={<Vari_otp/>}/>
        <Route path='/resetpass' element={<Rsetpass/>}/>
        <Route path='/updateuser' element={<Update/>}/>
        

        
        
        <Route path='/Dashboard/' element={<DasboardLayout/>} >

        <Route path='dashboard/' element={<Dashboard/>}></Route>
        <Route path='product/' element={<Product/>}></Route>
        <Route path='create/' element={<Create/>}></Route>
        <Route path='customer/' element={<CustomerLIst/>}></Route>
        <Route path='profile/' element={<Profile/>}></Route>
       
        </Route>

        
       
        
       
        
    
        
       

        <Route path='*' element={<h1>Not Found</h1>}/>


        
       
       
       </Routes>
      </BrowserRouter>
     
     

     
    </div>
  )
}

export default App
