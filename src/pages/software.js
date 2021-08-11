import Page from '../page.js'


class Software extends Page{
    content(){
        return(
            <div>
                <h2>Open Source Software</h2>
                <p>All the software below is free and open source. It is hosted on <a href="http://sourceforge.net/">SourceForge</a>, the links below redirect you to the relevant SourceForge download page.</p>
                <h2>Transportation Software</h2>
                <h3>Scalextric demand responsive traffic control</h3>
                <ul>
                <li>Code: <a href="http://sourceforge.net/p/scalextrictlc/code">http://sourceforge.net/p/scalextrictlc/code</a></li>
                </ul>
                <h2>Rocketry Software</h2>
                <h3>Cambridge Rocketry Simulator</h3>
                <ul>
                <li>Release: <a href="http://sourceforge.net/projects/camrocsim/files/">http://sourceforge.net/projects/camrocsim/files/</a></li>
                <li>Code: <a href="http://sourceforge.net/p/camrocsim/code/">http://sourceforge.net/p/camrocsim/code/</a></li>
                </ul>
                <h3>Cambridge Rocketry Toolbox</h3>
                <ul>
                <li>Release: <a href="http://sourceforge.net/projects/cambridgerocket/files/">http://sourceforge.net/projects/cambridgerocket/files/</a></li>
                <li>Code: <a href="http://cambridgerocket.cvs.sourceforge.net/cambridgerocket/">http://cambridgerocket.cvs.sourceforge.net/cambridgerocket/</a></li>
                <li>Dedicated site: <a href="http://cambridgerocket.sourceforge.net/">http://cambridgerocket.sourceforge.net/</a></li>
                </ul>
                <h1>Astronomy Software</h1>
                <h3>Instrumented Telescope (iTelescope) control software</h3>
                <ul>
                <li>Code: <a href="http://sourceforge.net/projects/itelescope/">http://sourceforge.net/projects/itelescope/</a></li>
                </ul>
            </div>
        )
    }
}

export default Software; 
