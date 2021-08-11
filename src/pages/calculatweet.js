import Page from '../page.js'
import { TwitterTimelineEmbed } from "react-twitter-embed";
import '../page.css';

class Calculatweet extends Page{
    content(){
        return(
            <div>
                <h2>Twitter's streaming API is a conversation starter</h2>
                <p><b>Article date: 3 March 2016</b></p>
                <p>If you are thinking about building a Twitter bot the first thing you will probably do is google "twitter api". This will likely drop you onto the page for Twitter's <a href="https://dev.twitter.com/rest/public">REST API</a>. This API is pretty powerful, it allows you to send tweets and retrieve tweets from your timeline and search for tweets with keywords and a whole lot of other stuff. The only drawback (I have found) is that the rate at which you can query the API is throttled so you cannot - for example - search for a tweet every second to detect new tweets as they come in.</p>

                <p>Ever since <a href="https://en.wikipedia.org/wiki/SmarterChild">SmarterChild</a> showed up on MSN messenger I have liked the idea of conversing with web-based AIs and it seems like Twitter is a good forum for this, but the query throttling on the REST API does not exactly allow the conversation to flow.</p>

                <p>Luckily since 2012 Twitter has provided an additional <a href="https://dev.twitter.com/streaming/overview">Streaming API</a>, which allows you to listen for incoming tweets with specific keywords and respond to them instantly as they arrive. It's a conversation starter.</p>

                <p>In order to test out the Streaming API I built a simple twitter bot called Calculatweet. If you tweet @calculatweet with a string that may reasonably be parsed as a sum (e.g. 3.14159*3^2/4) then calculatweet should respond quite quickly with a direct tweet to you containing the answer. Have a play with it below.</p>
                <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="Calculatweet"
                      options={{
                        tweetLimit: "5",
                        width: "50%",
                        height: "100%"
                      }}
                      theme="dark"
                      noHeader="true"
                      noBorders="true"
                      noFooter="true"
                ></TwitterTimelineEmbed>
                <h2>Feel like a challenge?</h2>
                <p>Currently Calculatweet is hosted on an Amazon EC2 server. Unfortunately I have not open-sourced the code yet because I am using Calculatweet as a platform for a coding challenge for engineers, which would be <em>a lot</em> easier if they could find the code online.</p>

                <p>Very briefly: participants are invited to send Calculatweet a message containing the string "get data" Calculatweet will reply with a message like: <em>"@SimonBox Strain data: ['240.7'; '222.7', '219.3', '221.7', '239.7', '215.2', '239.8', '233.4']"</em>. The challenge is to parse those strain data - where the first value is the last filtered value and the subsequent values are new raw measurements. Then participants must combine these recursively in a low pass filter (&alpha; = 0.1) and tweet the latest <em>filtered</em> value back to Calculatweet. The main challenge lies in the fact that you have to respond in under one second. In other words you need to build your own Twitter bot using the Streaming API.</p>
            </div>
        )
    }
}

export default Calculatweet;
