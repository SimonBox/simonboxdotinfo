import React from 'react';
import './navb.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Testpage from './pages/test_page.js';


class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div className="App-bar">
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar className="navbar-drk" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">SimonBox.info</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Testpage</Nav.Link>
                                    <Nav.Link href="/about-us">Testpage</Nav.Link>
                                    <Nav.Link href="/contact-us">Testpage</Nav.Link>
                                    <NavDropdown classNames="navbar-drk" title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Testpage />
                                </Route>
                                <Route path="/about-us">
                                    <Testpage />
                                </Route>
                                <Route path="/contact-us">
                                    <Testpage />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;
