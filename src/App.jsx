import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'

function App() {

  const router = createBrowserRouter([
    {path:"/",element:<LoginPage/>},
    {path:"/homepage",element:<HomePage/>},
    {path:"/register",element:<RegisterPage/>},
    {path:"*", element:<NotFoundPage/>}
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
