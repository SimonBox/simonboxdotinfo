import React from 'react';

class ImageTile extends React.Component {
    followlink = () => {
        window.open(this.props.url, "_self");
    }
    render() {
        return (
            <div align="center">
            <img
                alt={this.props.images[this.props.idx].caption}
                width={this.props.width}
                src={this.props.images[this.props.idx].source}
                onClick={this.followlink}
            />
            </div>
        )
    }
}


ImageTile.defaultProps = {
    images: [{source: "/logo512.png"}],
    idx: 0,
    width: 500,
    url: "/"
};

export default ImageTile
