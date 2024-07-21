import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, Outlet } from 'react-router-dom';
import Logo from "../assets/logo.png"
export default function GuestLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar expand="lg" className="bg-body-light bg-light">
        <Container>
          <Navbar.Brand as={Link} to="guesthome">
            <img src={Logo} width={"70rem"} alt="logo" />GreenVLabs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Lang" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.3">
                  <img src="../../src/assets/usa.png" width={"20px"} alt="eng" /> English
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  <img src="../../src/assets/egypt.png" width={"20px"} alt="arabic" /> عربي
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Link className='text-decoration-none ms-4 text-dark' to="guesthome">Home</Link>
              <Link className='text-decoration-none ms-4 text-dark' to="contact">Contact</Link>
              <Link className='text-decoration-none ms-4 text-dark' to="about">About Us</Link>
              <Dropdown className='w-90'>
                <Dropdown.Toggle as={Container} className='text-decoration-none ms-4 text-dark container' style={{ cursor: "pointer" }}>
                  <span className="material-symbols-outlined">account_circle</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className='w-80'>
                  <Dropdown.Item as={Link} to="/login" className='d-flex ms-2' style={{ width: "90%" }}>
                    <span className="material-symbols-outlined me-2">login</span>
                    <span>Login</span>
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/register" className='d-flex ms-2' style={{ width: "90%" }}>
                    <span className="material-symbols-outlined me-2">person_add</span>
                    <span>Register</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
