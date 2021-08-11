import Page from '../page.js'
import ImageViewer from '../image_view.js';
import YoutubeEmbed from '../youtube_embed.js'
import '../page.css';

const images = [{caption: "Arduino control", source: "/img/telescopecomputer.png"},
];


class InstrumentingADobsonian extends Page{
    content(){
        return(
            <div>
                <h2>Instrumenting A Dobsonian</h2>
                <p><b>Article date: 19 October 2011</b></p>
                <ImageViewer images={images} idx="0" width="400"/>
                <p>Like many amateur astronomers I have spent my fair share of time fiddling with an equatorial mount in the dark trying to align it with the Earth's axis of rotation. I have also spent quite a lot of time fumbling with a planisphere by torchlight to try and find that elusive object that I know is up there somewhere.</p>
                <p>These days those astronomers with cash to spare can turn to technology to ease these woes. You can buy computerised telescope mounts that can work out where they're pointing. Connect them to a laptop and the direction of view can be seen in a virtual planetarium. With the highest spec mounts you can simply enter the name of the object you'd like to view and watch as the telescope automatically slews to point at it.</p>
                <p>On the other hand if you are stingy, or you enjoy a challenge or (like me) both then there are plenty of options for home-brewing your own computerized telescope mount. This page documents my attempt.</p>
                <YoutubeEmbed embedId="2eTR0QFh6kw"/>
                <YoutubeEmbed embedId="s1LFy5OCD5s"/>
                <h3>The plan</h3>
                <p>The telescope I am using for this project is a <a href="http://skywatcher.com/product/bk-dob-10-collapsible/">Skywatcher 10" Dobsonian</a>. This comes on a simple plywood <a href="http://en.wikipedia.org/wiki/Altazimuth_mount"> alt-azimuth mount</a>, which has the advantage of being mechanically very simple. The downside is that tracking an object's motion is tricky as it requires movement in both axes, unlike <a href="http://en.wikipedia.org/wiki/Equatorial_mount">equatorial mounts</a>.</p>
                <p>The steps to computerizing this telescope mount are as follows:</p>
                <ol>
                <li>Fit instrumentation to measure the angles of <a href="http://en.wikipedia.org/wiki/Horizontal_coordinate_system"><em>altitude</em> and <em>azimuth</em></a>.</li>
                <li>Use a micro controller to monitor the angles and convert to <a href="http://en.wikipedia.org/wiki/Equatorial_coordinate_system"><em>right ascension</em> and <em>declination</em></a> in real time.</li>
                <li>Report the angles over serial connection to a laptop. Use virtual planetarium software on the laptop to display on screen where the telescope is pointing.</li>
                <li>Implement a "manual" go-to system which indicates how the telescope needs to be moved to point to a given object.</li>
                <li>Motorize the base to enable automatic go-to slewing and object tracking.</li>
                </ol>
                <h3>Progress so far</h3>
                <p>The videos above describe the progress on this project so far. Summary and additional info:</p>
                <ul>
                <li><a href="http://uk.rs-online.com/web/p/trimmers-potentiometer-rheostat/7081504/">Magnetopots</a> have been fitted to the base to measure angles of azimuth and altitude</li>
                <li>An <a href="http://www.arduino.cc/">Arduino</a> micro-controller is used to record measurements from the Magnetoptots, calculate angle conversions to right ascension and declination and to manage serial communications with a pc.</li>
                <li><a href="http://www.stellarium.org/">Stellarium</a> virtual planetarium software is used on a pc connected to the telescope and displays the direction which the telescope is pointing using a reticule on screen.</li>
                <li>The control software that I have developed for this is open source. While a stable "release" version is not yet available you can browse and download the source code (bugs and all) from its GIT repository. The link can be found on my <a href="/software">software page.</a></li>
                </ul>
            </div>
        )
    }
}

export default InstrumentingADobsonian;
