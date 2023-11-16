import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CarWidget';
import Logo from './Logo';


function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="d-flex justify-content-center align-items-center" href="#home"><Logo /></Navbar.Brand>
          <Nav className="me-auto d-flex justify-content-center align-items-center">
            <Nav.Link href="#comics">Comics</Nav.Link>
            <Nav.Link href="#features">Characters</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#tv-shows">TV Shows</Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href=""><CarWidget /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>  
    );
}

export default NavBar;