import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200.gif`
    return (
      <img src={src} alt="" classname='gif'/>

    );

    onClick={this.props.handleClick}

  }

}

export default Gif;
