import React from 'react';
import './page.css';

class Page extends React.Component{
    content(){
        return(
            <div>
                <p>Abstract class, you should not be seeing this.</p>
            </div>
        )
    }
    footer(){
        const date = new Date();
        const year = date.getFullYear();
        return(
            <div>
                <br/>
                <hr style={{
                    backgroundColor: '#fff',
                    height: .5,
                    color: '#fff'
                    }}/>
                <p>&copy; Simon Box {year}</p>
            </div>
        )
    }
    render(){
        const content = this.content();
        const footer = this.footer();
        return(
            <div className="pagebody">
                {content}
                {footer}
            </div>
        )
    }
}

export default Page;
