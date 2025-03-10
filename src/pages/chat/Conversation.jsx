import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
function Conversation() {


    return (
        <>
        <Card>
            <Card.Header>CONVERSATIONS</Card.Header>
            <Card.Body style={{height:"80vh"}}>
                
                <Row className='justify-content-right'>
                    <Col col={6}>
                        <Card className='mt-2' style={{height:"130px"}}>
                                    <Card.Header> <Image src="../../src/assets/male_p.png" style={{width:"30px",height:"30px"}} roundedCircle />&nbsp;&nbsp;Mike</Card.Header>
                                    <Card.Body><p>Hello [Name], I hope this message finds you well! I wanted to reach out to see h.............</p></Card.Body>
                          </Card>
                    
                    </Col>
                </Row>
                <Row className='justify-content-right'>
                    <Col col={6}>
                        <Card className='mt-2' style={{height:"130px"}}>
                                    <Card.Header> <Image src="../../src/assets/male_p.png" style={{width:"30px",height:"30px"}} roundedCircle />&nbsp;&nbsp;Mike</Card.Header>
                                    <Card.Body><p>Hello [Name], I hope this message finds you well! I wanted to reach out to see h.............</p></Card.Body>
                          </Card>
                    
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
          
            <Form className="d-flex">
                <Form.Control
                type="text"
                placeholder="Message"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success"><Image style={{width:"30px",height:"30px"}}   src="../../../src/assets/send.png"></Image></Button>
            </Form>
            </Card.Footer>
        </Card>
        </>
    )
}

export default Conversation