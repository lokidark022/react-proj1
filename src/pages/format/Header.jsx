import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {UserInfoContext,Context} from '../../App';
import { useContext, useState,useEffect } from 'react';
import axios from 'axios';
function Header() {

  const {UserInfo, SetUserInfo} = useContext(UserInfoContext);
  const {UserData, setUserData} = useContext(Context);
  var email = '';
        try {
          if(UserInfo === undefined){
          //  console.log('Loading data');
          }else{
         //   console.log(UserInfo.email);
             email =  UserInfo.email;
          }

        } catch (error) {
          
        }


  

          const handleLogout = async (id) => {
            const axiosJWT = axios.create()
            const email = id.email;
             const accessToken = UserData.accessToken;
            console.log(accessToken)
              axiosJWT.post('http://localhost:5000/logout',{headers:{"Authorization":"Bearer "+accessToken}})
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
          
   

  return (


        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: &nbsp; 

                


              </Navbar.Text>

              <NavDropdown title={email} id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() =>handleLogout({email})} >Logout</NavDropdown.Item>
         
             
            
            </NavDropdown>

              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}



export default Header