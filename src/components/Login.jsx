
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginCore from  './core/LoginCore.jsx'
// import './css/Login.css'
function Login(){
        <LoginCore/>
    return (
        <>
        <Card style={{padding:'30px',paddingTop:'50px',boxShadow:'10px 10px rgba(0, 0, 0, 0.35)' }}>
        <Form >
            <Form.Label><h3>Login</h3> </Form.Label>
            <Form.Group className='mb-3' controlId='forEmail'>
            <FloatingLabel label="Email">
            <Form.Control type='email' placeholder='Enter email'></Form.Control>
            </FloatingLabel>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='forPassword'>
            <FloatingLabel label="Password">
            <Form.Control type='password' placeholder='Enter password'></Form.Control>
            </FloatingLabel>
            <Form.Text className="text-muted">We'll never share your passowrd with anyone else.</Form.Text>
            </Form.Group>
            <Row>
                <Col><Button size='lg' variant="outline-primary" type="submit"> Submit </Button></Col>
                <Col><a href="#">Click here to Register</a> </Col>
            </Row>
            
        </Form>
        </Card>
        </>   
    )
}
export default Login