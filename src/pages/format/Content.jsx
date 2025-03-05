import './css/Content.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Content (){


    return (
        <>  
        <Container fluid>
            <Row >
                <Col md={6} style={{maxWidth:'100%',height:'100px',minHeight:'200px'}}>    
                            <Card >
                    
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                </Col>
                <Col md={6}>

                        <Card >
                            
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                
                </Col>  
                
       
            </Row>

        </Container>
     
            
        </>
    )
}
export default Content