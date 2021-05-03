import React from 'react';
import './navb.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Testpage from './pages/test_page.js';
import RocketFlightSimulation from './pages/rocket_flight_simulation.js';
import CambridgeRocketrySimulator from './pages/cambridge_rocketry_simulator.js';
import CambridgeRocketryToolbox from './pages/cambridge_rocketry_toolbox.js';

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
                                    <NavDropdown classNames="navbar-drk" title="Past projects" id="basic-nav-dropdown">
                                        <NavDropdown classNames="navbar-drk" title="Rocketry" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/cambridge-rocketry-simulator">Cambridge Rocketry Simulator</NavDropdown.Item>
                                            <NavDropdown.Item href="/cambridge-rocketry-toolbox">Cambridge Rocketry Toolbox</NavDropdown.Item>
                                            <NavDropdown.Item href="/rocket-flight-simulation">Rocket flight simulation</NavDropdown.Item>
                                        </NavDropdown>
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
                                <Route path="/cambridge-rocketry-simulator">
                                    <CambridgeRocketrySimulator/>
                                </Route>
                                <Route path="/cambridge-rocketry-toolbox">
                                    <CambridgeRocketryToolbox/>
                                </Route>
                                <Route path="/rocket-flight-simulation">
                                    <RocketFlightSimulation/>
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
