import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Invalid from './pages/Invalid.jsx'
import Cookies from 'js-cookie';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'
import { useState,createContext, useEffect, useMemo} from 'react'
import './App.css'
import axios from 'axios'
export const Context = createContext();
export const UserInfoContext = createContext();
export const UpdateStates = createContext();
function App() {


  const [UserInfo, SetUserInfo] = useState();
  const [UserData, setUserData] = useState();
  const [UpdateState, SetupdateState] = useState(false);
  const tempInfo = {"email":"admin@admin.com","isAdmin": true}
   
  const axiosJWT = axios.create();
  var getCookie = '';
  var getCookieData = '';
  ///////////////////////////////////////////////////////////////////////////////////

 function  fetchUserInfo  (email,accessToken){
   //  const emails = 'admin@admin.com'
     //const accessTokens = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDE1OTY3MDgsImV4cCI6MTc0MTU5NzAwOH0.7sEYg3d61wvAe3C9fTI_uOYKk4UUqtKVjyqwQeM5LvU';
   // var result = [];
     axiosJWT.get("http://localhost:5000/userinfo/",{email:email,headers:{"authorization":"Bearer "+accessToken} })
    .then(function (response) {
      SetUserInfo(response.data);
      //console.log(response);
    // result = response;
    })
    .catch(function (error) {
        console.log(error.response.status) // 401
        console.log(error.response.data.error) //Please Authenticate or whatever returned from server
      if(error.response.status==401){
        console.log('401')
      }
    })

    //console.log(result);
    // return result;

  }

  // useEffect(() => {
  //   const userInfos = fetchUserInfo();

  //   console.log(userInfos);
    
  // },[UserInfo]);


  




  // useEffect( async () => {
  //   // Fetch the data
    
  //  const data = await fetchPost(accessToken);
  //   console.log(data);
  // },[]);


  ///////////////////////////////////////////////////////////////////////////////////
  useMemo (()=> {
  
         getCookie = Cookies.get('cookieData');

        if(getCookie === undefined && UserData === undefined){
          console.log('No data from cookies and userData Please login');
        //  SettoggleEffect(true);
        }else if(UserData === undefined){

          ///////////////////////////////////////////////////////////////////////////
         
        
          getCookie = Cookies.get('cookieData');
          getCookie = JSON.parse(getCookie);
          console.log(getCookie);
          const accessToken = getCookie.accessToken;
          fetchUserInfo(getCookie.email,getCookie.accessToken);
         // const data =  getUserData(getCookie.refreshToken);
       //   fetchUserInfo();
         // console.log(data);
       
          ///////////////////////////////////////////////////////////////////////////
           // console.log('cookie with data and user UserData is Undifined');
           // console.log('UserData = Cookie data');
          //  getCookie = JSON.parse(getCookie);
           // console.log(getCookie);
            setUserData(getCookie);
          // console.log('Cookie Data');
          // console.log(getCookie);
          // console.log('State Data');
          // console.log(UserData);
        }
    if(UpdateState === true && UserData === undefined){
      SetupdateState(false);
      getCookie = JSON.parse(getCookie);
       console.log(getCookie);
       setUserData(getCookie);
      console.log('updateState and cookie');
    }

  },[UpdateState, UserData])

console.log(UserInfo);
///////////////////////////////////////////////////////////////////////////
// useMemo(() => {
//     getCookieData = Cookies.get('cookieData');
//     getCookieData = JSON.parse(getCookieData);
//     const accessToken = getCookieData.accessToken;
//     //const userEmail = getCookieData.email;
//    // console.log(UserData.accessToken);
//     console.log(getCookieData.accessToken);
//   async function fetchData() {
//     // You can await here
//     const response = await axios.post('http://localhost:5000/userinfo', {headers:{"Authorization":"Bearer "+accessToken}});
//       console.log(response);
//     // ...
//   }
//   fetchData();
// }); 








//console.log(UserInfo)

///////////////////////////////////////////////////////////////////////////

  //console.log(UserData);

  // const router = createBrowserRouter([
  //   {path:"/",element:<LoginPage/>},

  //   {path:"/homepage",element:<HomePage/>},

  //   {path:"/register",element:<RegisterPage/>},
  //   {path:"*", element:<NotFoundPage/>}
  // ]);




  // const router = createBrowserRouter(
    
  //   [
  //       {
  //           path: "*",
  //           element: <NotFoundPage />,
  //       },
  //       {
  //         path: "/register",
  //         element: <RegisterPage />,
  //       },
  //       {
  //         path: "/",
  //         element: <LoginPage />,
  //       },
  //       {
  //     element: <ProtectedRoutes ></ProtectedRoutes>,
  //     children: [
  //             {
  //                 path: "/homepage",
  //                 element: <HomePage  />,
  //             }
       
  //     ],
  //       },
  //     ]);

  return (

 

      // <HomePage></HomePage>
      // <LoginPage></LoginPage>
        //  <RegisterPage/>
 
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
