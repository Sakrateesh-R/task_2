import { Link } from "react-router-dom";
import  {Table, Container, Row, Col, Button, ButtonGroup, Form,FormControl, Navbar,Nav, NavbarBrand, FormGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Future Vision </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/Signup">Signup</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
       /*<Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Future Vision</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link variant="dark" href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/Signup">Signup</Nav.Link>
                    
                    </Nav>   
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>*/
        
    );
  }
