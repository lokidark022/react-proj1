import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Invalid from './pages/Invalid.jsx'
import Cookies from 'js-cookie';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'
import { useState,createContext, useEffect, useMemo} from 'react'
import { AuthVerify } from './components/core/authVerify.js'
import './App.css'
import axios from 'axios'
export const Context = createContext();
export const UserInfoContext = createContext();
export const UpdateStates = createContext();
function App() {
  
   

   const [UserInfo, SetUserInfo] = useState();
   const [UserData, setUserData] = useState();
   const [UpdateState, SetupdateState] = useState();
  const tempInfo = {"email":"admin@admin.com","isAdmin": true}
  var cookieData;
  if(UserData === undefined){

    console.log('UserData undifined');
    cookieData = Cookies.get('cookieData');
    if(cookieData === undefined){
      console.log('no cookie data');
    }else{
      setUserData(JSON.parse(cookieData));
     
      
    }
  }

  

  if(UserData){
    console.log(UserData);
  }

useEffect(()=>{
  console.log('UserData state Changed');
  console.log(UserData.refreshToken)
},[UserData])

















  ///////////////////////////////////////////////////////////////////////////////////

//  function  fetchUserInfo  (email,accessToken){
//    //  const emails = 'admin@admin.com'
//      //const accessTokens = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDE1OTY3MDgsImV4cCI6MTc0MTU5NzAwOH0.7sEYg3d61wvAe3C9fTI_uOYKk4UUqtKVjyqwQeM5LvU';
//    // var result = [];
//      axiosJWT.get("http://localhost:5000/userinfo/",{email:email,headers:{"authorization":"Bearer "+accessToken} })
//     .then(function (response) {
//       SetUserInfo(response.data);
//       //console.log(response);
//     // result = response;
//     })
//     .catch(function (error) {
//         console.log(error.response.status) // 401
//         console.log(error.response.data.error) //Please Authenticate or whatever returned from server
//       if(error.response.status==401){
//         console.log('401')
//       }
//     })

    //console.log(result);
    // return result;

  //}
///////////////////////////////////////////////////////////////////////////


  return (
    <>  
  
        <Context.Provider value={{UserData, setUserData}}>
          <UpdateStates.Provider value={{UpdateState, SetupdateState}}>
            <UserInfoContext.Provider value={{UserInfo, SetUserInfo}}>
              <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/homepage' element={<HomePage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
                <Route path='/invalid' element={<Invalid/>}/>
              </Routes>
            </UserInfoContext.Provider>
          </UpdateStates.Provider>
        </Context.Provider>
 
{/* 
      <RouterProvider router={router}/> */}
    </>
  )
}


export default App
