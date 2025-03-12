import './css/Content.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useContext } from 'react';
import {Context,UpdateStates} from '../../App';
import { AuthVerify ,axiosJWT} from '../../components/core/authVerify';

function Content (){
const authVerify = AuthVerify();
const {UserData, setUserData} = useContext(Context);
const accessToken = UserData.accessToken;

console.log(accessToken);
const handleDelete = async (id) => {



  axiosJWT.delete('http://localhost:5000/users/1',{headers:{"Authorization":"Bearer "+accessToken}})
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error.response.status) // 401
        console.log(error.response.data.error) //Please Authenticate or whatever returned from server
      if(error.response.status==401){
        console.log('401')
      }else if(error.response.status==403){
        console.log('403  Invalid token');
      }
    })



  
};


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
                            <Button onClick={() => handleDelete(1)} variant="danger">Delete</Button>
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
                            <Button onClick={() => handleDelete(2)} variant="danger">Delete</Button>
                            </Card.Body>
                            </Card>
                
                </Col>  
                
       
            </Row>

        </Container>
     
            
        </>
    )
}





export default Content