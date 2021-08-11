import Page from '../page.js'
import ImageTile from '../image_tile.js';
import '../page.css';

const images = [{caption: "Scalextric Track", source: "/img/trafficlight_thumb.jpg"},
                {caption: "Aurduino control", source: "/img/scalexss2_thumb.png"},
                {caption: "Inductive loop circuit", source: "/img/fpmonte_thumb.png"},
                {caption: "Traffic light circuit", source: "/img/telescopecomputer_thumb.png"},
                {caption: "Traffic light circuit", source: "/img/rockschem3_thumb.jpg"},
                {caption: "Traffic light circuit", source: "/img/oneshowscreenshot02_thumb.png"},
];


class Home extends Page{
    content(){
        return(
            <div>
                <h3>Current Role</h3>
                <p>At present I am Senior Director of Simulation and Offline Testing at <a href="https://aurora.tech">Aurora</a>, where our mission is to deliver the befetits of self driving safely, quickly and broadly. You can see some of the amazing work from the team I serve on the offical Aurora blog. For example:</p>
                <ul>
                <li><a href="https://aurora.tech/blog/scaling-simulation">Scaling Simulation</a></li>
                <li><a href="https://aurora.tech/blog/virtual-testing-the-invisible-accelerator">Virtual Testing</a></li>
                <li><a href="https://aurora.tech/blog/online-to-offline">Online to Offline</a></li>
                <li><a href="https://aurora.tech/blog/the-offline-executor">The Offline Executor</a></li>
                </ul>
                <p>You can also read/hear nice things that Aurora's CEO <a href="https://en.wikipedia.org/wiki/Chris_Urmson">Chris Urmson</a> has said about the Simulation team's work in these interviews:</p>
                <ul>
                <li><a href="bi_urmson_virtual_testing.pdf">Business Insider interview</a></li>
                <li><a href="https://youtu.be/5gzRNVL3p2c?t=2674">This Week in Startups interview</a></li>
                </ul>
                <h3>Links</h3>
                <ul>
                <li><a href="resume_sbox.pdf">Resume/CV</a></li>
                <li><a href="publications">Published articles</a></li>
                <li><a href="https://www.linkedin.com/in/simon-box-8090379a/">LinkedIn</a></li>
                <li><a href="https://github.com/SimonBox">Github</a></li>
                <li><a href="https://sourceforge.net/u/srb2242/profile/">Sourceforge</a></li>
                </ul>
                <h3>Past projects</h3>
                <div className="image-narrow" align="center">
                <ImageTile images={images} idx="0" width="175" url="https://doi.org/10.1098/rsos.140211"/>
                <ImageTile images={images} idx="1" width="175" url="/slot-car-traffic-control"/>
                <ImageTile images={images} idx="2" width="175" url="/cambridge-rocketry-simulator"/>
                <ImageTile images={images} idx="3" width="175" url="/instrumenting-a-dobsonian"/>
                <ImageTile images={images} idx="4" width="175" url="/rocket-flight-simulation"/>
                <ImageTile images={images} idx="5" width="175" url="human-traffic-control-experiment"/>
                </div>
            </div>
        )
    }
}

export default Home;
