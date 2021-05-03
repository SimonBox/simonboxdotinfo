import Page from '../page.js'
import ImageViewer from '../image_view.js';
import '../page.css';

const images = [{caption: "Free body diagram", source: "/img/rockschem3.jpg"},
                {caption: "Simulation data screen", source: "/img/crsdatasum.png"},
                {caption: "Rocket design screen", source: "/img/crsdespage.png"},
                {caption: "Flight launch screen", source: "/img/crslaunchpage.png"},
                {caption: "Flight path plot", source: "/img/fpsingle.png"},
                {caption: "Monte Carlo flight paths", source: "/img/fpmonte.png"},
                {caption: "Splash down plot", source: "/img/splashdown.png"},
];


class CambridgeRocketrySimulator extends Page{
    content(){
        return(
            <div>
                <h2>Cambridge Rocketry  Simulator</h2>
                <p><b>Article date: 19 October 2011</b></p>
                <ImageViewer images={images}  idx="0" width="250"/>
                <p>The Cambridge rocketry simulator is currently the main software programme produced by Cambridge rocketry. It is a stand alone rocket simulator that runs under Linux and Windows. It is written in a C++, Java and Python. You can download the latest release or access the source code from my <a href="index.php/software">software</a> page.</p>
                <h3>Functionality</h3>
                <p>The Cambridge rocketry simulator is for simulating the flight and parachute descent of <a href="http://en.wikipedia.org/wiki/High-power_rocketry">High Power Rockets</a> (HPR) and model rockets. The software allows you to programme in data on the design of your rocket, and the atmospheric conditions at the launch site. You can then simulate flight trajectories individually or you can do multiple <em>stochastic</em>runs in "Monte Carlo" mode to generate splash down plots. Below are some screen shots of the simulator GUI and the flight trajectory plots and splash plots it produces.</p>
                <h3 class="system-pagebreak">Screenshots:</h3>
                <div className="image-grid" align="center">
                <ImageViewer images={images} idx="1" width="250"/>
                <ImageViewer images={images} idx="2" width="250"/>
                <ImageViewer images={images} idx="3" width="250"/>
                <ImageViewer images={images} idx="4" width="250"/>
                <ImageViewer images={images} idx="5" width="250"/>
                <ImageViewer images={images} idx="6" width="250"/>
                </div>
                <p>The Cambridge rocketry simulator can be used to simulate a number of common rocket designs including multi stage rockets and rockets with multiple parachute deployments.</p>
                <p>The simulation engine on which the programme is based has been described in a scientific paper published in the Journal of Aerospace Engineering. You can link to this paper from my <a href="index.php/publications/#rocketpaper">publications</a> page.</p>
                <p>The is also a version of this software called the <a>Cambridge Rocketry Toolbox</a>, which runs in Octave/Matlab. While the toolbox is slower and less user friendly than the simulator it easy to extend the functionality by writing your own Octave/Matlab code.</p>
                <p>Please also see the <a href="http://cambridgerocket.sourceforge.net">Cambridge Rocketry</a> website for more info.</p>
            </div>
            )
    }
}

export default CambridgeRocketrySimulator;
