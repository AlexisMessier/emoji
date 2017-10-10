import React from 'react';

const styleComponentTitle1 = {
  fontWeight: "bold",
  fontFamily: "Open Sans",
  fontSize: "32px",
  textAlign: "center",
  color: "blue"
}

class Header extends  React.Component {
  render() {
    return (
      <span style={styleComponentTitle1}>
        {this.props.textComponentTitle1}
      </span>
    );
  }
}

export default Header;
