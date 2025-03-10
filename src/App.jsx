import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Invalid from './pages/Invalid.jsx'
import Cookies from 'js-cookie';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'
import { useState,createContext, useEffect, useMemo} from 'react'
import './App.css'
export const Context = createContext();
export const UpdateStates = createContext();
function App() {
  
  const [UserData, setUserData] = useState();
  const [UpdateState, SetupdateState] = useState(false);
  const [toggleEffect, SettoggleEffect] = useState(false);
  const navigate = useNavigate();
  var getCookie = '';

  ///////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////
  useMemo (()=> {
         getCookie = Cookies.get('cookieData');

        if(getCookie === undefined && UserData === undefined){
          console.log('No data from cookies and userData Please login');
        //  SettoggleEffect(true);
        }else if(UserData === undefined){
           // console.log('cookie with data and user UserData is Undifined');
           // console.log('UserData = Cookie data');
            getCookie = JSON.parse(getCookie);
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
      // console.log(getCookie);
       setUserData(getCookie);
      console.log('updateState and cookie');
    }

  },[UpdateState, UserData])
///////////////////////////////////////////////////////////////////////////


// useEffect(()=> {
//   if(getCookie === undefined && UserData === undefined){
//     console.log('No data from cookies and userData Please login');

//     setTimeout(function() {
//       navigate('/invalid');
//     }, 1000);

//     if(toggleEffect === true && UserData === undefined){
//       SetupdateState(false);
//       getCookie = JSON.parse(getCookie);
//       // console.log(getCookie);
//       console.log('updateState and cookie');
//     }
//   }

// },[toggleEffect])

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
            <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/homepage' element={<HomePage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
              <Route path='/invalid' element={<Invalid/>}/>
            </Routes>
          </UpdateStates.Provider>
        </Context.Provider>
 
{/* 
      <RouterProvider router={router}/> */}
    </>
  )
}


export default App
