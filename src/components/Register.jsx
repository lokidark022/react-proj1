import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card'
function Register(){



    return (
        <>
        
        <Card style={{padding:'30px',paddingTop:'50px',boxShadow:'10px 10px rgba(0, 0, 0, 0.35)' }}>
        <Form >
            <Form.Label><h3>Register</h3> </Form.Label>
            <Form.Group className='mb-3' controlId='forEmail'>
            <FloatingLabel  controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control  type='email' placeholder='Enter email'></Form.Control>
            </FloatingLabel>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='forPassword'>
            <FloatingLabel label="Password" className="mb-3">
            <Form.Control type='password' placeholder='Enter password'></Form.Control>
            </FloatingLabel>
            </Form.Group>
            
            <Form.Group className='mb-3' controlId='forCPassword'>
            <FloatingLabel label="Confirm Password" className="mb-3">
            <Form.Control type='password' placeholder='Confirm password'></Form.Control>
            </FloatingLabel>
            <Form.Text className="text-muted">We'll never share your passowrd with anyone else.</Form.Text>
            </Form.Group>
            <Row>
                <Col><Button size='lg' variant='outline-success' type="submit"> Submit </Button></Col>
                <Col><a href="#">Already Registered? <br></br>Login</a></Col>
            </Row>
            
        </Form>
        </Card>
        
        </>
    )
}


export default Register