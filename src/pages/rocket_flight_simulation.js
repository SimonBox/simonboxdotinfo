import Page from '../page.js'
import ImageViewer from '../image_view.js';
import YoutubeEmbed from '../youtube_embed.js'

const images = [{caption: "Launching a two-stage rocket at EARS", source: "/img/rockettower.jpg"}];


class RocketFlightSimulation extends Page{
    content(){
        return(
            <div>
                <h2>Rocket Flight Simulation</h2>
                <p><b>Article date: 19 October 2011</b></p>
                <ImageViewer images={images} idx="0" width="300"/>
                <p>I have been writing rocket flight simulation software for about five years now. The software I produce is released under the name <a href="http://cambridgerocket.sourceforge.net/">Cambridge Rocketry</a>, which was formed in Cambridge (hence the name) between myself <a href="http://research.microsoft.com/en-us/um/people/cmbishop/">Chris Bishop</a> and <a href="http://www2.eng.cam.ac.uk/~hemh/">Hugh Hunt</a> in 2006. Chris, Hugh and I wrote a <a href="https://eprints.soton.ac.uk/73938/1/boxetal11%2520%25282%2529.pdf">paper</a>, published in the <a href="https://doi.org/10.1061/(ASCE)AS.1943-5525.0000051">Journal of Aerospace Engineering</a>, which describes the science behind rocket flight simulation.</p>
                <p>Cambridge Rocketry software is designed to help fliers of <a href="http://en.wikipedia.org/wiki/High-power_rocketry">High Power Rockets</a>. HPR are essentially large model rockets that are fired into the sky in the name of fun/science. At apogee they deploy parachutes and float back to ground safely. The software produces accurate six-degree-of-freedom rocket flight simulations to help HPR designers and also produces splash-down plots to aid safe flying.</p>
                <p>Cambridge Rocketry currently has two releases. The <a href="/cambridge-rocketry-simulator">Cambridge Rocketry Simulator</a> is a stand alone program with a graphical user interface. The <a href="/cambridge-rocketry-toolbox">Cambridge Rocketry Toolbox</a> is a set of Octave/Matlab functions which allow you to do all that you can with the Cambridge Rocketry Simulator and more because it is easy to modify the code and add your own functions. The downside is that it is not so user friendly (no GUI) and it runs much slower.</p>
                <p>One of the fun things about writing rocket flight simulation software is that to validate it you really need to fly some rockets. Below is a link to a video of a validation flight carried out at an EARS event in July 2006.</p>
            <YoutubeEmbed embedId="1GQ6RTkiuJU"/>
            </div>
            )
    }
}

export default RocketFlightSimulation;
