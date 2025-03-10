import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {UserInfoContext} from '../../App';
import { useContext } from 'react';
function Header() {
  const {UserInfo, SetUserInfo} = useContext(UserInfoContext);
        try {
          const userEmail = UserInfo.email
        } catch (error) {
          
        }
   
        //console.log(UserInfo.email);

  return (


        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: &nbsp; 

                


              </Navbar.Text>

              <NavDropdown title='test' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
         
             
            
            </NavDropdown>

              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}



export default Header