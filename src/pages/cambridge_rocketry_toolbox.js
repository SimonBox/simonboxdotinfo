import Page from '../page.js'
import ImageViewer from '../image_view.js';
import '../page.css';

const images = [{caption: "Cambridge Rocketry Logo", source: "/img/crlogosquare.jpg"},
                {caption: "Screenshot", source: "/img/crtss01.png"}
];


class CambridgeRocketryToolbox extends Page{
    content(){
        return(
            <div>
                <h2>Cambridge Rocketry Toolbox</h2>
                <p><b>Article date: 19 October 2011</b></p>
                <ImageViewer images={images} idx="0" width="300"/>
                <p>The Cambridge rocketry toolbox is a set of functions for simulating <a href="http://en.wikipedia.org/wiki/High-power_rocketry">High Power Rocket</a> (HPR) flights using Octave or Matlab.</p>

                <p> If you do not know how to use Octave or Matlab, or you would prefer to use more user friendly stand alone software please have a look at the <a href="index.php/rocketry/80-toplevel/projects/rocketry/71-cambridge-rocketry-simulator">Cambridge Rocketry Simulator</a>. The toolbox is useful if you would like to extend the functionality by writing your own Ocatave/Matlab code. You can download the latest release of the toolbox from my <a href="index.php/software">software</a> page and the <a href="http://cambridgerocket.sourceforge.net">Cambridge Rocketry website</a>.</p>

                <h3>Functionality</h3>
                <p>The Cambridge rocketry toolbox is for simulating the flight and parachute descent of <a href="http://en.wikipedia.org/wiki/High-power_rocketry">High Power Rockets</a> (HPR) and model rockets. It allows you to programme in data on the design of your rocket, and the atmospheric conditions at the launch site. You can then simulate flight trajectories individually or you can do multiple <em>stochastic</em> runs in "Monte Carlo" mode to generate splash down plots. Below is a screen shot of the flight trajectory plots and splash plots it produces.</p>

                <ImageViewer images={images} idx="1"/>
                <p>The Cambridge rocketry toolbox can be used to simulate a number of common rocket designs including multi stage rockets and rockets with multiple parachute deployments.</p>

                <p>The simulation engine on which the programme is based has been described in a scientific paper published in the Journal of Aerospace Engineering. You can link to this paper from my <a href="index.php/publications">publications</a> page.</p>
            </div>
        )
    }
}

export default CambridgeRocketryToolbox;
