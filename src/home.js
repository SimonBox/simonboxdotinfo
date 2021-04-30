import React from 'react';
import './App.css';
import ImageViewer from './image_view.js';


class Homepage extends React.Component{
    content(){
        return(
            <div>
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
    footer(){
        const date = new Date();
        const year = date.getFullYear();
        return(
            <div>
                <br/>
                <hr style={{
                    backgroundColor: '#fff',
                    height: .5,
                    color: '#fff'
                    }}/>
                <p>&copy; Simon Box {year}</p>
            </div>
        )
    }
    render(){
        const content = this.content();
        const footer = this.footer();
        return(
            <div className="App-body">
                {content}
                {footer}
                <ImageViewer/>
            </div>
        )
    }
}

export default Homepage;
