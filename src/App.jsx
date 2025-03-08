import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState,createContext} from 'react'
import './App.css'
export const Context = createContext();
function App() {
  
  const [UserData, setUserData] = useState();
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
    <BrowserRouter>
        <Context.Provider value={{UserData, setUserData}}>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </Context.Provider>
    </BrowserRouter>
{/* 
      <RouterProvider router={router}/> */}
    </>
  )
}


export default App
