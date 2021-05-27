import Page from '../page.js'
import ImageViewer from '../image_view.js';
import YoutubeEmbed from '../youtube_embed.js'
import '../page.css';

const images = [{caption: "iTelescope", source: "/img/iTelPhoto.png"},
];


class RaspberryPiITelescope extends Page{
    content(){
        return(
            <div>
                <h2>Raspberry Pi iTelescope</h2>
                <p><b>Article date: 7 September 2013</b></p>
                <ImageViewer images={images} idx="0"/>
                <p>The latest updates to this project to instrument a Sky-Watcher Dobsonian telescope include the adoption of a Raspberry Pi as the telescope's computer, bluetooth connection to a laptop and a user interface software on the laptop for set up and calibration. </p>
                <h3>Video Documentation</h3>
                <p align="left">

                <YoutubeEmbed embedId="fRAF6LnHk1A"/>
                </p>
                <h2>The Components</h2>
                <h3>Hardware:</h3>
                <ul>
                <li><b>Telescope: </b> <a href="http://www.skywatchertelescope.net/swtinc/product.php?id=52&class1=1&class2=106">Sky-Watcher 10" Dobsonian</a></li>
                <li><b>Telescope computer: </b> <a href="http://www.raspberrypi.org/">Raspberry Pi</a></li>
                <li><b>Analogue Digital Converter: </b> <a href="http://www.abelectronics.co.uk/products/3/Raspberry-Pi/17/ADC-Pi-V2---Raspberry-Pi-Analogue-to-Digital-converter">AB Electronics ADC PI V2</a></li>
                <li><b>Bluetooth Dongle: </b> <a href="http://lm-technologies.com/adapters/bluetooth-usb-adapters/lm540-bluetooth-usb-adapters/">LM technologies lm540 bluetooth adabpter </a></li>
                <li><b>Battery: </b><a href="http://www.tecknetonline.co.uk/tecknet-iep387-7000mah-dual-port-usb-external-battery-black.html">TeckNet iEP387 External Battery Pack</a></li>
                </ul>
                <h3>Software:</h3>
                <ul>
                <li><b>Python Programme for the Raspberry Pi: </b><a href="http://sourceforge.net/projects/itelescope/files/?source=navbar">iTelRaspberry (SourceForge redirect)</a></li>
                <li><b>Python Programme for the Laptop: </b><a href="http://sourceforge.net/projects/itelescope/files/?source=navbar">iTelComputer (SourceForge redirect)</a></li>
                <li><b>Virtual planetarium software: </b> <a href="http://www.stellarium.org/">Stellarium</a></li>
                </ul>
            </div>
        )
    }
}

export default RaspberryPiITelescope;
