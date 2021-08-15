
import { Button, Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
const TopNav = (props)=>{

    return(  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand><span className="brand-name-home">Omkar<br/>Bahiwal</span></Navbar.Brand>
    <Nav className="me-auto">
      {/* <Link to="/"><span className="nav-item-name-home">explore</span></Link> */}
    </Nav>
    </Container>
</Navbar>);
}

export default TopNav;