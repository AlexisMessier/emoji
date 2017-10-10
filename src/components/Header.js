import React, { Component } from 'react';
import Image from './Image';

const componentHeader = {
  padding: "15px",
  position: "relative",
  fontWeight: "normal",
  fontFamily: "Open Sans",
  fontSize: "32px",
  textAlign: "center",
  color: "#333"
}

const componentHeaderImg = {
  position: "relative",
  top: "6px",
  padding: "0 14px",
  width: "32px",
  height: "32px"
}

class Header extends Component {
  render() {
    return (
      <div>
        <header
          style={componentHeader}>
          <Image
            srcComponentImage={"1f638"}
            altComponentImage={"1f638"}
          />
  Emoji Search
          <Image
            srcComponentImage={"1f639"}
            altComponentImage={"1f639"}
          />
        </header>
      </div>
    );
  }
}

export default Header;
