import React, { useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { Context ,UpdateStates} from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export const axiosJWT = axios.create()
export const AuthVerify = () => {

    const {UserData, setUserData} = useContext(Context);
    const navigate = useNavigate();
  
    if (UserData === undefined){
        navigate('/invalid');
    }   else{
        var currentAccessToken = UserData.accessToken;
        var accessToken = currentAccessToken;
        var email = UserData.email;
        var refreshToken = UserData.refreshToken;
        console.log(refreshToken);
        const refreshTokens = async () => {
            try {
            const res = await axios.post("http://localhost:5000/refresh", {email:email, token: refreshToken });
                
            setUserData(res.data);
            // setUserData({
            //     ...UserData,
            //     email:res.data.email,
            //     accessToken: res.data.accessToken,
            //     refreshToken: res.data.refreshToken,
            // });
                console.log(res.data);
                console.log('Refresh token!');
    
            var cookieData = JSON.stringify(res.data);                  
                Cookies.set('cookieData',cookieData,{ expires: 7 });
    
    
    
    
            return res.data;
        
            } catch (err) {
            console.log(err);
            }
        };
    }






  //console.log(axiosJWT);

    axiosJWT.interceptors.request.use(
   
        async (config) => {
           
          let currentDate = new Date();
          const decodedToken = jwtDecode(accessToken);
          if (decodedToken.exp * 1000 < currentDate.getTime()) {
         //   console.log(getCookie());
            const data = await refreshTokens();
            SetupdateState(true);
            config.headers["authorization"] = "Bearer " + data.accessToken;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

    
      
}


