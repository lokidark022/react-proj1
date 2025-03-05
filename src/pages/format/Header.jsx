import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (


        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: &nbsp;

                


              </Navbar.Text>

              <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
         
             
            
            </NavDropdown>

              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}



export default Header