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
                <div align="center">
                <img
                    alt={this.props.images[this.props.idx].caption}
                    width={this.props.width}
                    src={this.props.images[this.props.idx].source} 
                    onClick={this.showathing}
                />
                </div>
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

ImageViewer.defaultProps = {
    images: [{source: "/logo512.png"}],
    idx: 0,
    width: 500
};

export default ImageViewer;
