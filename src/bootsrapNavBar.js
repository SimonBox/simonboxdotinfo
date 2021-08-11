import React from 'react';
import './navb.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import RocketFlightSimulation from './pages/rocket_flight_simulation.js';
import CambridgeRocketrySimulator from './pages/cambridge_rocketry_simulator.js';
import CambridgeRocketryToolbox from './pages/cambridge_rocketry_toolbox.js';
import RaspberryPiITelescope from './pages/raspberry_pi_itelescope.js';
import InstrumentingADobsonian from './pages/instrumenting_a_dobsonian.js';
import SlotCarTrafficControl from './pages/slot-car-traffic-control.js';
import HumanTrafficControlExperiment from './pages/human_traffic_control_experiment.js';
import Calculatweet from './pages/calculatweet.js';
import Software from './pages/software.js';
import Publications from './pages/publications.js';
import Home from './pages/home.js';

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div className="App-bar">
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar className="navbar-drk" expand="lg" sticky="top">
                                <Navbar.Brand href="/">SimonBox.info</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <NavDropdown classnames="navbar-drk" title="Past projects" id="basic-nav-dropdown">
                                        <NavDropdown classnames="navbar-drk" title="Astronomy" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/raspberry-pi-itelescope">Raspberry Pi iTelescope</NavDropdown.Item>
                                            <NavDropdown.Item href="/instrumenting-a-dobsonian">Instrumenting a Dobsonian</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown classnames="navbar-drk" title="Rocketry" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/cambridge-rocketry-simulator">Cambridge Rocketry Simulator</NavDropdown.Item>
                                            <NavDropdown.Item href="/cambridge-rocketry-toolbox">Cambridge Rocketry Toolbox</NavDropdown.Item>
                                            <NavDropdown.Item href="/rocket-flight-simulation">Rocket flight simulation</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown classnames="navbar-drk" title="Transporation" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="slot-car-traffic-control">Slot car traffic control</NavDropdown.Item>
                                            <NavDropdown.Item href="human-traffic-control-experiment">Human traffic control experiment</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown.Item href="calculatweet">Calculatweet</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/software">Software</Nav.Link>
                                    <Nav.Link href="/publications">Publications</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
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
                                <Route path="/raspberry-pi-itelescope">
                                    <RaspberryPiITelescope/>
                                </Route>
                                <Route path="/instrumenting-a-dobsonian">
                                    <InstrumentingADobsonian/>
                                </Route>
                                <Route path="/slot-car-traffic-control">
                                    <SlotCarTrafficControl/>
                                </Route>
                                <Route path="/human-traffic-control-experiment">
                                    <HumanTrafficControlExperiment/>
                                </Route>
                                <Route path="/calculatweet">
                                    <Calculatweet/>
                                </Route>
                                <Route path="/software">
                                    <Software/>
                                </Route>
                                <Route path="/publications">
                                    <Publications/>
                                </Route>
                                {/*Old Website redirects*/}
                                <Route exact path="/index.php">
                                    <Home/>
                                </Route> 
                                <Route exact path="/index.php/transportation">
                                    <HumanTrafficControlExperiment/>
                                </Route>
                                <Route exact path="/index.php/transportation/91-human-junction-control-experiment">
                                    <HumanTrafficControlExperiment/>
                                </Route>
                                <Route exact path="/index.php/transportation/80-scalextric-with-traffic-control">
                                    <SlotCarTrafficControl/>
                                </Route>
                                <Route exact path="/index.php/rocketry">
                                    <CambridgeRocketrySimulator/>
                                </Route>
                                <Route exact path="/index.php/rocketry/71-cambridge-rocketry-simulator">
                                    <CambridgeRocketrySimulator/>
                                </Route>
                                <Route exact path="/index.php/rocketry/72-cambridge-rocketry-toolbox">
                                    <CambridgeRocketryToolbox/>
                                </Route>
                                <Route exact path="/index.php/rocketry/70-rocket-flight-simulation">
                                    <RocketFlightSimulation/>
                                </Route>
                                <Route exact path="/index.php/astronomy">
                                    <RaspberryPiITelescope/>
                                </Route>
                                <Route exact path="/index.php/astronomy/93-raspberry-pi-itelescope">
                                    <RaspberryPiITelescope/>
                                </Route>
                                <Route exact path="/index.php/astronomy/77-instrumenting-a-dobsonian-reflecting-telescope">
                                    <InstrumentingADobsonian/>
                                </Route>
                                <Route>
                                    <Home/>
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
