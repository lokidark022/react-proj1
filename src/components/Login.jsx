
import Form from 'react-bootstrap/Form'
import HomePage from '../pages/HomePage'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import React, { useState, createContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import  LoginCore from './core/LoginCore.js';
import axios from 'axios'
import ProtectedRoutes from '../util/ProtectedRoutes.jsx'
import dataEncrypt from './dataEncrypt.js'
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



 function Login(){
    //  const NameContext= createContext();
    const NameContext = createContext("light");
    const [show, setShow] = useState(false);
     const [users, setUsers] = useState([]);
    
    const [temp, setTemp] = useState("temp");
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      
        // console.log(stats)
        e.preventDefault();


      
       
  
      try{
        const res = await axios.post('http://localhost:5000/',{email,password});
         console.log(res.data);
         const userDatas = res.data;
      
        // userData = res.data;
        userData(userDatas);
        setUsers(res.data);
        setShow(true);
 
      

        if(res.data.isValid){
       
     
          // setTimeout(function() {
          //   navigate('/homepage');
          // }, 1000);
        }

  


      }catch (err){
        console.log(err);
      }

    {

    }
    }

 
      
    return (
        <>


        {/* <NameContext.Provider value={users}> 

        </NameContext.Provider> */}
 
        <ProtectedRoutes props={{users, setUsers}}/>
          <dataEncrypt callbackProp={dataEncrypt('test','enc')}/>
          

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
// export const NameContext= createContext(UserDs);
