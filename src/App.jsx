import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProtectedRoutes from './util/ProtectedRoutes.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'

function App() {

  // const router = createBrowserRouter([
  //   {path:"/",element:<LoginPage/>},

  //   {path:"/homepage",element:<HomePage/>},

  //   {path:"/register",element:<RegisterPage/>},
  //   {path:"*", element:<NotFoundPage/>}
  // ]);

  const router = createBrowserRouter(
    [
        {
            path: "*",
            element: <NotFoundPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
      path: "/",
      element: <LoginPage />,
        },
        {
      element: <ProtectedRoutes />,
      children: [
              {
                  path: "/homepage",
                  element: <HomePage />,
              }
       
      ],
        },
      ]);

  return (

 

      // <HomePage></HomePage>
      // <LoginPage></LoginPage>
        //  <RegisterPage/>
 
    <>
      <RouterProvider router={router}/>
    </>
  )
}


export default App
