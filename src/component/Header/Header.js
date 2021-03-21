import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let auth = loggedInUser;
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Joy Ride</Navbar.Brand>
                <Nav className="mr-auto ml-5">
                    <Link to="/"><Button className="ml-5" variant="outline-info">Home</Button></Link>
                    <Link to={"/rideType/"}><Button className="ml-5" variant="outline-info">Destination</Button></Link>
                    <Link to="/"><Button className="ml-5" variant="outline-info">Blog</Button></Link>
                    <Link to="/"><Button className="ml-5" variant="outline-info">Contact</Button></Link>
                </Nav>
                <Form inline>
                    {
                        auth.name ? <div>
                            <Button variant="outline-info">{auth.name}</Button>
                            <Button variant="outline-info" color="secondary">Sign Out</Button>
                        </div>
                            :
                            <Link to="/login">
                                <Button variant="outline-info">Log In</Button>
                            </Link>
                    }
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;