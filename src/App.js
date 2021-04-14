import logo from './logo.svg';
import './App.css';
import { NavBar } from 'react-bootstrap';
import BootstrapNavbar from './bootsrapNavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BootstrapNavbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Simons New Website</h1>
      </header>
    </div>
  );
}

export default App;
