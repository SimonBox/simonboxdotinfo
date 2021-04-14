import React from 'react'
import './App.css';

class Homepage extends React.Component{
    render(){
        return(
            <div className="App-body">
                <h1>Raspberry Pi - iTelescope</h1>
                <p>The latest updates to this project to instrument a Sky-Watcher Dobsonian telescope include the adoption of a Raspberry Pi as the telescope's computer, bluetooth connection to a laptop and a user interface software on the laptop for set up and calibration.</p>
                <iframe width="480" height="360" src="//www.youtube-nocookie.com/embed/fRAF6LnHk1A?rel=0" frameborder="0" allowfullscreen=""></iframe>
            </div>
        )
    }
}

export default Homepage;
