import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'js-cookie';
import dataSecured from '../../components/core/dataSecured';
function Header() {

  var authData = Cookies.get('authData');
  var tempKey = Cookies.get('tempKey');

  authData = dataSecured(authData,'dec',tempKey);
  var authData_obj =JSON.parse(JSON.parse(authData));
  const email = authData_obj.email;


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
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
         
             
            
            </NavDropdown>

              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}



export default Header