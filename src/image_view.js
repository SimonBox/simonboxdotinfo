import Carousel, { Modal, ModalGateway } from "react-images";
import React from 'react';

const images = [{caption: "A thing.", source: "/scalextrictc.jpg"},{source: '/scalextricbrain.jpg'}];

class ImageViewer extends React.Component {
    state = { modalIsOpen: true }
    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }))
    }
    render() {
        const { modalIsOpen } = this.state;
        const idx = 0;
        return (
            <div>
              <ModalGateway>
                {modalIsOpen ? (
                  <Modal onClose={this.toggleModal}>
                    <Carousel
                      currentIndex={idx}
                      views={images}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
        )
    }
}

export default ImageViewer;
