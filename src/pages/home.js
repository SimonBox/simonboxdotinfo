import Page from '../page.js'
import '../page.css';

const images = [];


class Home extends Page{
    content(){
        return(
            <div>
                <h3>Current Role</h3>
                <p>At present I am Director of Simulation and Offline Testing at <a href="https://aurora.tech">Aurora</a>, where our mission is to deliver the befetits of self driving safely, quickly and broadly. You can see some examples of my team's work on the offical Aurora blog. For example:</p>
                <ul>- <a href="https://aurora.tech/blog/scaling-simulation">Scaling Simulation</a></ul>
                <ul>- <a href="https://aurora.tech/blog/virtual-testing-the-invisible-accelerator">Virtual Testing</a></ul>
                <ul>- <a href="https://aurora.tech/blog/online-to-offline">Online to Offline</a></ul>
                <ul>- <a href="https://aurora.tech/blog/the-offline-executor">The Offline Executor</a></ul>
                <h3>Links</h3>
                <ul>Resume/CV</ul>
                <ul>Published articles</ul>
                <ul>LinkedIn</ul>
                <ul>Github</ul>
                <ul>Sourceforge</ul>

                <h3>Past projects</h3>
            </div>
        )
    }
}

export default Home;
