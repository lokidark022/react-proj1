import React, { useState, useContext, useEffect} from 'react';
import Header from './format/Header.jsx'
import { useOutletContext, useLocation, useNavigate} from "react-router-dom";
import Content from './format/Content.jsx'
import Card from 'react-bootstrap/Card';
import Footer from './format/Footer'
import './css/HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Cookies from 'js-cookie';
import { Context } from '../App.jsx';
import Image from 'react-bootstrap/Image';
import dataSecured from "../components/core/dataSecured";
import Conversation from './chat/Conversation.jsx';
function HomePage(){
    const navigate = useNavigate();
    var getCookie= Cookies.get('cookieData');
        useEffect(()=> {
            if(getCookie === undefined){
                navigate('/invalid');
               // console.log('cookie is undefinned');
            }

        })

      //  console.log(getCookie);

//   var authData = Cookies.get('authData');
//   var tempKey = Cookies.get('tempKey');

//   authData = dataSecured(authData,'dec',tempKey);
//   var authData_obj =JSON.parse(JSON.parse(authData));
//   const email = authData_obj.email;
  //console.log(authData_obj.email);




    return (

        <>
            <Container fluid>
                <Row>
                    <Col><Header></Header></Col>
                </Row>
                <Row>
                    
                    <Col col={4} style={{maxWidth:"430px"}}>

                    <Card className='bg-secondary text-white' style={{height:"90vh"}}>
                        <Card.Header>MESSAGES</Card.Header>
                        <Card.Body>
                            <Card className='mt-2' style={{height:"130px"}}>
                                <Card.Header> <Image src="../../src/assets/profile.png" style={{width:"30px",height:"30px"}} roundedCircle />&nbsp;&nbsp;Mary</Card.Header>
                                <Card.Body><p>Hello [Name], I hope this message finds you well! I wanted to reach out to see h.............</p></Card.Body>
                            </Card>
                            <Card className='mt-2' style={{height:"130px"}}>
                                <Card.Header> <Image src="../../src/assets/male_p.png" style={{width:"30px",height:"30px"}} roundedCircle />&nbsp;&nbsp;Jhon</Card.Header>
                                <Card.Body><p>Hello [Name], I hope this message finds you well! I wanted to reach out to see h.............</p></Card.Body>
                            </Card>
                            <Card className='mt-2' style={{height:"130px"}}>
                                <Card.Header> <Image src="../../src/assets/male_p.png" style={{width:"30px",height:"30px"}} roundedCircle />&nbsp;&nbsp;Mike</Card.Header>
                                <Card.Body><p>Hello [Name], I hope this message finds you well! I wanted to reach out to see h.............</p></Card.Body>
                            </Card>
                            
                            
                        </Card.Body>
                    </Card>
                                    
                    
                    </Col>
                    <Col col={8} style={{width:"100%"}}>
                        {/* <Content></Content> */}
                        <Conversation></Conversation>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* <Footer></Footer> */}
                    </Col>
                </Row>
            </Container>




                {/* <div className='container-fluid'>
                    <div className="row">
                        <div className="col"><Header></Header></div>
                    </div>
                    <div className="row">
                        <div className="col bg-info"><Content></Content></div>
                    </div>
                    <div className="row">
                        <div className="col bg-secondary"><Footer></Footer></div>
                    </div>
       
               </div> */}
        </>
        
        
     

    )
}

export default HomePage