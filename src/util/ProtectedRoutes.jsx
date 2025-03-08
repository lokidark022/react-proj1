import React , { useState, useEffect}from "react";
import { Navigate,useOutletContext , useLocation ,Outlet} from "react-router-dom";
//import dataSecured from "../components/core/dataSecured";
import Cookies from 'js-cookie';
import * as CryptoJS from 'crypto-js'
import dataSecured from "../components/core/dataSecured";
// import { Login } from '../components/Login.jsx';

const ProtectedRoutes = ()=> {

  // var authData = Cookies.get('authData');
  // var tempKey = Cookies.get('tempKey');
  //   if(authData === undefined){
      
  //     console.log(authData);
      
  //    return  <Navigate to="/"/>
  //   }else{
  //         authData = dataSecured(authData,'dec',tempKey);
  //    var authData_obj =JSON.parse(JSON.parse(authData));
     const isValid = true;
     

    return isValid ? <Outlet/> : <Navigate to="/"/>

    
}
export default ProtectedRoutes