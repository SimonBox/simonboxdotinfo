import Page from '../page.js'
import '../page.css';

const images = [];


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
            </div>
        )
    }
}

export default Home;
