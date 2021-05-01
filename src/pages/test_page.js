import Page from '../page.js'
import ImageViewer from '../image_view.js';
import YoutubeEmbed from '../youtube_embed.js'

const images = [{caption: "A thing.", source: "/scalextrictc.jpg"},{source: '/scalextricbrain.jpg'}];


class Testpage extends Page{
    content(){
        return(
            <div>
                <h2>Raspberry Pi - iTelescope</h2>
                <ImageViewer images={images} idx="1" width="550"/>
                <p>The latest updates to this project to instrument a Sky-Watcher Dobsonian telescope include the adoption of a Raspberry Pi as the telescope's computer, bluetooth connection to a laptop and a user interface software on the laptop for set up and calibration.</p>
                <YoutubeEmbed embedId="fRAF6LnHk1A"/>
                <h3>Software</h3>
                <ul> 
                    <li><b>Python Programme for the Raspberry Pi: </b><a href="http://sourceforge.net/projects/itelescope/files/?source=navbar">iTelRaspberry (SourceForge redirect)</a></li>
                    <li><b>Python Programme for the Laptop: </b><a href="http://sourceforge.net/projects/itelescope/files/?source=navbar">iTelComputer (SourceForge redirect)</a></li>
                    <li><b>Virtual planetarium software: </b> <a href="http://www.stellarium.org/">Stellarium</a></li>
                </ul>

            </div>
        )
    }
}

export default Testpage;
