import React, { useState, useContext} from 'react';
import Header from './format/Header.jsx'
import { useOutletContext, useLocation} from "react-router-dom";
import Content from './format/Content.jsx'
import Footer from './format/Footer'
import './css/HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Cookies from 'js-cookie';
import { Context } from '../App.jsx';
import dataSecured from "../components/core/dataSecured";
function HomePage(){
    
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
                    <Col>
                        <Content></Content>
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