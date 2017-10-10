import React, { Component } from 'react';

const styleComponentTitle1 = {
  fontWeight: "bold",
  fontFamily: "Open Sans",
  fontSize: "32px",
  textAlign: "center",
  color: "blue"
}

class Header extends Component {
  render() {
    return (
      <h1 style={styleComponentTitle1}>
        {this.props.textComponentTitle1}
      </h1>
    );
  }
}

export default Header;
