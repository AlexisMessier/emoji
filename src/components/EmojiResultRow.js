import React from 'react';

const styleResultRowEmoji = {
  borderBottom: "1px solid #ccc",
  padding: "10px",
  height: "32px",
  position: "relative",
  cursor: "pointer"
}

const styleEmoji = {
  width: "32px",
  height: "32px",
  paddingRight: "10px"
}

class EmojiResultRow extends React.Component {
  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div style={styleResultRowEmoji}>
        <img
          style={styleEmoji}
          alt={this.props.title}
          src={src}
        />
        <span>
          {this.props.title}
        </span>
      </div>
    );
  }
}

export default EmojiResultRow;
