import React , { useState, useEffect}from "react";
import { Outlet,Navigate } from "react-router-dom";

// import { Login } from '../components/Login.jsx';

const ProtectedRoutes = (props)=> {


    
    const userData = {
        "isValid": false,
        "tmessage": "Valid User",
        "bmessage": "Valid Credentials",
        "email": "admin@admin.com",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDEzMTc4MTUsImV4cCI6MTc0MTMxNzg0NX0.x-mcnX88qoDpWQi05XYP4X71xvEKtISfIWoRDzlQML8",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDEzMTc4MTV9.1IJbLTWjq6wsv0_GzuRMHQ8m3rg5aeJfMsRex8psL90"
      };




    // const [data, setData] = useState([]);
    //    const userData = props.props.users;
    //     setData(userData)
      console.log(props);
    const isValid = true;


    //  const isValid = data;
     // console.log(data)

     return isValid ?  <Outlet context={{userData}}/> : <Navigate to="/"/>
}
export default ProtectedRoutes