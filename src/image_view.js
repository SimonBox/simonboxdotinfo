import Carousel, { Modal, ModalGateway } from "react-images";
import React from 'react';


class ImageViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = { modalIsOpen: false };
    }
    showathing = () => {
            this.setState(state => ({ modalIsOpen: true }))
    }
    donotshowathing = () => {
            this.setState(state => ({ modalIsOpen: false }))
    }
    render() {

        return (
            <div>
                <img src={this.props.images[this.props.idx].source} onClick={this.showathing}/>
                <p>Firstly: {this.props.images[0].source}</p>
                <p>Secondly: {this.props.idx}</p>
                <ModalGateway>
                    {this.state.modalIsOpen ? (
                      <Modal onClose={this.donotshowathing}>
                        <Carousel
                          currentIndex={this.props.idx}
                          views={this.props.images}
                        />
                      </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        )
    }

}


export default ImageViewer;
