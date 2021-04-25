import React from 'react';
import './App.css';


class Homepage extends React.Component{
    render(){
        return(
            <div className="App-body">
                <h1>Raspberry Pi - iTelescope</h1>
                <p>The latest updates to this project to instrument a Sky-Watcher Dobsonian telescope include the adoption of a Raspberry Pi as the telescope's computer, bluetooth connection to a laptop and a user interface software on the laptop for set up and calibration.</p>
                    <iframe width="480" height="360" src="//www.youtube-nocookie.com/embed/fRAF6LnHk1A?rel=0" frameborder="0" allowfullscreen=""></iframe>
                <h2>Software</h2>
                <ul> 
                    <li><b>Python Programme for the Raspberry Pi: </b><a class="page" href="http://sourceforge.net/projects/itelescope/files/?source=navbar">iTelRaspberry (SourceForge redirect)</a></li>
                    <li><b>Python Programme for the Laptop: </b><a class="page" href="http://sourceforge.net/projects/itelescope/files/?source=navbar">iTelComputer (SourceForge redirect)</a></li>
                    <li><b>Virtual planetarium software: </b> <a class="page" href="http://www.stellarium.org/">Stellarium</a></li>
                </ul>

            </div>
        )
    }
}

export default Homepage;
