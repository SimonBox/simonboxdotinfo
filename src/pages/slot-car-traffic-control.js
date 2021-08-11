import Page from '../page.js'
import ImageViewer from '../image_view.js';
import YoutubeEmbed from '../youtube_embed.js'
import '../page.css';

const images = [{caption: "Scalextric Track", source: "/img/scalextrictc.jpg"},
                {caption: "Aurduino control", source: "/img/scalextricbrain.jpg"},
                {caption: "Inductive loop circuit", source: "/img/ilcircuit.jpg"},
                {caption: "Traffic light circuit", source: "/img/tlcircuit.jpg"},
];


class SlotCarTrafficControl extends Page{
    content(){
        return(
            <div>
                <h2>Slot car traffic control</h2>
                <p><b>Article Date: 17 November 2011</b></p>
                <div className="image-grid" align="center">
                <ImageViewer images={images} idx="0" width="405"/>
                <ImageViewer images={images} idx="1" width="405"/>
                </div>
                <p>The scalextric (slot car) with traffic control is an educational tool designed to teach people about some of the technologies behind today's traffic control systems in a fun and interactive way. It was built for  an <a href="http://invisible-referee.soton.ac.uk/">exhibit</a> at the <a href="http://royalsociety.org/summer-science/2011/">Royal Society Summer science exhibition</a>. But it also pops up at other science outreach events like Science and engineering day at the <a href="http://www.soton.ac.uk">University of Southampton.</a> </p>
                <p>You can watch the videos below which demonstrate how the system works on and early prototype.</p>
                <YoutubeEmbed embedId="dtU0CMuvMI0"/>
                <YoutubeEmbed embedId="nRRUaSX83nQ"/>
                <h3>Want to build your own?</h3>
                <p>The inductive loop sensors used in this set were made out of a coil of wire with 13 turns. This is connected to an amplifying circuit using LMC662CN Op-Amp. The circuit diagram is below. The traffic lights are three LED's red, yellow and green. The circuit for these is below also.</p>

                <div className="image-grid" align="center">
                <ImageViewer images={images} idx="2" width="550"/>
                <ImageViewer images={images} idx="3" width="250"/>
                </div>
                <p>The inductive loop sensors and traffic lights are connected up to an <a href="http://www.arduino.cc/">Arduino</a> micro-controller. The Arduino is programmed with the junction control logic. You can download the Arduino code <a href="/software">here</a>.</p>

            </div>
        )
    }
}

export default SlotCarTrafficControl;
