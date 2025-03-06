
import Form from 'react-bootstrap/Form'
import ProtectedRoutes from '../util/ProtectedRoutes'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import React, { useState , createContext, useContext} from 'react';
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import './css/Login.css'
 export const UserContext = createContext();


function Login(){


    const [show, setShow] = useState(false);
    const [showValid, setShowValid] = useState(false);
    const [users, setUsers] = useState([]);

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        // console.log(stats)
        e.preventDefault();


      
       
  
      try{
        const res = await axios.post('http://localhost:5000/',{email,password});
         console.log(res.data);
        
        setUsers(res.data);
        setShow(true);
 
      

        if(res.data.isValid){
          setTimeout(function() {
            navigate('/homepage');
          }, 3000);
        }

  


      }catch (err){
        console.log(err);
      }

    {

    }
    }

 
      
    return (
        <>
      
      <UserContext.Provider value={[users, setUsers]}>
        <ProtectedRoutes />
      </UserContext.Provider>
    
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


  
        </>   
    )
}
export default Login