import React from 'react';
import Image from './Image';
import Title1 from './Title1';

const componentHeader = {
  padding: "15px",
  textAlign: "center",
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <header style={componentHeader}>
          <Image
            srcComponentImage={"1f638"}
            altComponentImage={"1f638"} />
          <Title1
            textComponentTitle1={"Emoji Search"} />
          <Image
            srcComponentImage={"1f639"}
            altComponentImage={"1f639"} />
        </header>
      </div>
    );
  }
}

export default Header;
