import React, { useState, useContext} from 'react';
import Header from './format/Header.jsx'
import { useOutletContext} from "react-router-dom";
import Content from './format/Content.jsx'
import Footer from './format/Footer'
import './css/HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function HomePage(){
    const context = useOutletContext()
    console.log(context);
    // const users = useContext(NameContext);
    // console.log(users);
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