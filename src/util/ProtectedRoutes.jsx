import React, { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import {UserContext} from '../components/Login.jsx'
function ProtectedRoutes() {
     const user = useContext(UserContext);
    console.log(user);
    // const user = userData.isValid;
    // return user ? <Outlet/> : <Navigate to="/"/>
}
export default ProtectedRoutes