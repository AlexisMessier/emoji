import React from 'react';

const styleComponentImage = {
  top: "6px",
  padding: "0 14px",
  width: "32px",
  height: "32px",
}

class Image extends React.Component {
  render() {
    return (
      <img
        style={styleComponentImage}
        src={"//cdn.jsdelivr.net/emojione/assets/png/" + this.props.srcComponentImage + ".png"}
        alt={"Emoji #" + this.props.altComponentImage}
      />
    );
  }
}

export default Image;
