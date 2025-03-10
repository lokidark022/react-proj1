import './css/Content.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useContext } from 'react';
import {Context,UpdateStates} from '../../App';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';





function Content (){


    var accessToken = '';
    var refreshToken = '';

    const {UpdateState, SetupdateState} = useContext(UpdateStates)
    const {UserData, setUserData} = useContext(Context);
    () => SetupdateState(true);
 //   console.log(UserData);
 try {
  accessToken = UserData.accessToken;
  refreshToken = UserData.refreshToken;
  
 } catch (error) {
  
 }
    



const axiosJWT = axios.create()
//const axiosJWT = axios.create()

const handleDelete = async (id) => {

  //  console.log(accessToken)

    // console.log(jwtDecode(accessToken));

    axiosJWT.delete('http://localhost:5000/users/1',{headers:{"Authorization":"Bearer "+accessToken}})
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error.response.status) // 401
        console.log(error.response.data.error) //Please Authenticate or whatever returned from server
      if(error.response.status==401){
        console.log('401')
      }
    })



  
};

// const refreshTokens = async ()=>{

//     console.log('refresh time')
  
//     try {
       
//         const res = await axiosJWT.post("/refresh",{token:refreshToken});
//         setUserData({...UserData,
//             accessToken:accessToken,
//             refreshToken:refreshToken,
//         });
//     } catch (error) {
//         console.log(error);
//     }

// };


const refreshTokens = async () => {
    try {
      const res = await axios.post("http://localhost:5000/refresh", { token: refreshToken });

    //  console.log(res);
      setUserData({
        ...UserData,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });


       var cookieData = JSON.stringify(res.data);                  
           Cookies.set('cookieData',cookieData,{ expires: 7 });




      return res.data;
   
    } catch (err) {
      console.log(err);
    }
  };






axiosJWT.interceptors.request.use(
  async (config) => {
    let currentDate = new Date();
    const decodedToken = jwtDecode(accessToken);
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const data = await refreshTokens();
      SetupdateState(true);
      config.headers["authorization"] = "Bearer " + data.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);






 

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