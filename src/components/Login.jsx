
import Form from 'react-bootstrap/Form'
import Cookies from 'js-cookie';
import HomePage from '../pages/HomePage'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import React, { useState, useContext, useEffect} from 'react';
import {Link, useNavigate, Outlet, Navigate} from 'react-router-dom'
import  LoginCore from './core/LoginCore.js';
import axios from 'axios'
import ProtectedRoutes from '../util/ProtectedRoutes.jsx'
import * as CryptoJS from 'crypto-js'
import dataSecured from './core/dataSecured.js';
import {Context} from '../App.jsx'
// import './css/Login.css'
// const userDatas = [{test:'test'}];



let userData = (userDatas) =>{
  let userData = userDatas;
  //  const userData = {
  //       "isValid": true,
  //       "tmessage": "Valid User",
  //       "bmessage": "Valid Credentials",
  //       "email": "admin@admin.com",
  //       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDEzMTc4MTUsImV4cCI6MTc0MTMxNzg0NX0.x-mcnX88qoDpWQi05XYP4X71xvEKtISfIWoRDzlQML8",
  //       "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDEzMTc4MTV9.1IJbLTWjq6wsv0_GzuRMHQ8m3rg5aeJfMsRex8psL90"
  //     };
  return userData
}

//  function data_secured(text,type,pass){

//   const secretKey = pass
//   let result = '';
//   if(type == 'enc'){
//       const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString()
//       result = cipherText;
//   }else if(type == 'dec'){
//       const bytes = CryptoJS.AES.decrypt(text, secretKey )
//       const plainText = bytes.toString(CryptoJS.enc.Utf8)
//       result = plainText;
    
//   }

//   return result
//  }

 function Login(){
    let isValid = false;
     const {UserData, setUserData} = useContext(Context);
  // console.log( UserData);
    var datakey = "";
    //  const NameContext= createContext();
    // const NameContext = createContext("light");
    const [show, setShow] = useState(false);
     const [users, setUsers] = useState([]);
    
    const [temp, setTemp] = useState("temp");
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

    //  console.log(dataSecured('test','enc', '123'));
        // console.log(stats)
        e.preventDefault();


      // const userData2 = {
      //   "isValid": false,
      //   "tmessage": "Valid User",
      //   "bmessage": "Valid Credentials",
      //   "email": "admin@admin.com",
      //   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDEzMTc4MTUsImV4cCI6MTc0MTMxNzg0NX0.x-mcnX88qoDpWQi05XYP4X71xvEKtISfIWoRDzlQML8",
      //   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3NDEzMTc4MTV9.1IJbLTWjq6wsv0_GzuRMHQ8m3rg5aeJfMsRex8psL90"
      // };
       
  
      try{
        const res = await axios.post('http://localhost:5000/',{email,password});
        const userDatas = res.data;
     

        setUserData(userDatas)
        // datakey = userDatas.dataKey;
        // Cookies.set('tempKey', datakey, { expires: 7 });
        // console.log(userDatas.dataKey);
       // const stringti = JSON.stringify(userDatas);
        console.log(userDatas.isValid)

      
          // Cookies.set('authData', dataSecured(stringti,'enc',datakey), { expires: 7 });
          // const authData = Cookies.get('authData');
          // console.log(' encryp Data: ' + authData );
          // console.log(' Decrypt Data: ' + dataSecured(dataSecured(stringti,'enc',datakey),'dec', datakey));
        
    
         
           

 
 


    


        // userData = res.data;
        userData(userDatas);
        setUsers(res.data);
        setShow(true);
        // const test = JSON.stringify(userData2);
      

        // if(res.data.isValid){
          
     
          setTimeout(function() {
            navigate('/homepage');
          }, 1000);
        // }

  


      }catch (err){
        console.log(err);
      }

    {

    }
    }

 
      
    return (
        <>
        {/* <Navigate to={UserData.isValid ? '/homepage' : '/'}/>  */}
   
        {/* <NameContext.Provider value={users}> 

        </NameContext.Provider> */}
 
        {/* <ProtectedRoutes datakey={datakey}/> */}
      
          

        <Card  style={{padding:'30px',paddingTop:'50px',boxShadow:'10px 10px rgba(0, 0, 0, 0.35)' }}>

    
        <Alert style={{maxWidth:'325px'}} show={show} variant={(users.isValid)?"success":"danger"} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{users.tmessage}</Alert.Heading>
        <p>
        {users.bmessage}<br/>
        {(users.isValid)?"Please Wait 2 sec": ""}
        </p>
      </Alert>
 
       
     <Form onSubmit={handleSubmit} >
            <Form.Label><h3>Login</h3> </Form.Label>
            <Form.Group className='mb-3' controlId='forEmail'>
            <FloatingLabel label="Email">
            <Form.Control onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email'></Form.Control>
            </FloatingLabel>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='forPassword'>
            <FloatingLabel label="Password">
            <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password'></Form.Control>
            </FloatingLabel>
            <Form.Text className="text-muted">We'll never share your passowrd with anyone else.</Form.Text>
            </Form.Group>
            <Row>
                <Col><Button size='lg' variant="outline-primary" type="submit"> Submit </Button></Col>
                <Col><Link to={"/register"}>Click herer to register</Link></Col>
            </Row>
            
        </Form>
        </Card>
        {/* <Outlet context={{temp, setTemp}}/> */}

  
        </>   
    )
    
}



export default Login
// const global = userD;
// export const NameContext= createContext('test');
