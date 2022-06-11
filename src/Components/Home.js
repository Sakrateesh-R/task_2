
import { Table,Navbar,Container, Row, Col, Button, ButtonGroup, Form,NavbarBrand, FormGroup,NavBrand } from "react-bootstrap";

export default function Home(){


    return(
        <div className = "Home">
            <Navbar bg="primary" variant="dark" className="justify-content-center">
                <Navbar.Brand >
                    <b>HOME PAGE</b>
                </Navbar.Brand>
            </Navbar><br/>
            <div className="home-body">
                <Container className="container">
                    <h4 className="Headings">About our Page</h4>
                    <p>This is a basic site which use json-server as backend and react as front-end, In this application there are two kind of login's.<br/>
                    <li>Admin_User</li>
                    <li>End-User</li></p><br/>
                    <h5 className="Headings" style={{marginTop:"-15px",marginBottom:"-10px"}}>Admin Rights</h5><br/>
                    <p>Admin have the rights to view the other userdetail's and can Manage the Users of the Application .In this Application there is only one Admin and the Admin can promote the User to a Admin Role by using the Back-end database data.</p>
                    <p>In addition In the Admin page there is a new feature added where the Admin can Search the User's Using the search option</p>
                    <div>
                        <h5 className="Headings">Module's of our site</h5>
                        <ol>
                            <li> Home page Module </li>
                            <li> Signup Module </li>
                            <li> Login Module</li>
                        </ol>
                        <h5 className= "Headings">Home Module</h5>
                        <p> The Home module give's some overview of the Application and describe the Module and the working Funtionality of the application. </p>
                        <h5 className= "Headings">Signup {`&`} Login Module</h5>
                        <p>The Functionality is similar to every other Signup page where the new user can signup and can login to the application. </p>
                    </div>
                    <div className="Links">
                        <a href ="login">Click here to Login</a>
                        <a href ="Signup">SignUp new User</a>
                    </div>
                </Container>


            </div>
        </div>
    );
}