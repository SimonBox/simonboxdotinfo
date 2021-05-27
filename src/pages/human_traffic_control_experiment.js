import Page from '../page.js'
import ImageViewer from '../image_view.js';
import YoutubeEmbed from '../youtube_embed.js'
import '../page.css';

const images = [{caption: "human control", source: "/img/oneshowscreenshot02.png"},
];


class HumanTrafficControlExperiment extends Page{
    content(){
        return(
            <div>
                <h2>Human Traffic Control Experiment</h2>
                <ImageViewer images={images} idx="0" width="600"/>
                <p>An experiment was carried out at a proving ground. 30 cars were asked to drive around a <em>figure-of-eight</em> circuit with a traffic light controlled junction in the centre. There were four <em>runs</em> of this experiment. In the first three the junction was controlled by an optimised fixed-time controller. In the fourth a human "controller" switched the lights remotely from a laptop</p>

                <h3>Read more about the experiment</h3>
                <p>Download <a href="/papers/sBoxUTSG13.pdf">this paper</a> to read more about the experiments and its results.</p>
                <h3>Get the data</h3>
                <p>Lots of data were recorded during this experiment from GPS sensors within the vehicles and from track-side bluetooth detectors. If you're interested in the data you can <a href="/data/mira_20120531.zip">download it</a></p>
                <YoutubeEmbed embedId="Pn3yAPAn-ss"/>
            </div>
        )
    }
}

export default HumanTrafficControlExperiment;
