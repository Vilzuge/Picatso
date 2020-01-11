import React, { Component } from "react";

import Nav from "./Nav";
import MainMenu from "./mobile/MainMenu";
import Background from "../images/background1.png";
import Music from "./Music";

// Everything rendered in the mobile will be here
class Mobile extends Component {
  render() {
    const backgroundStyle = {
      height: "100vh",
      minHeight: "100%",
      margin: "0",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundImage: "url(" + Background + ")",
      zIndex: "-1000"
    };
    return (
      <div>
        <Nav />
        <div style={backgroundStyle}>
          <div className="window container">
            <MainMenu />
            <Music />
          </div>
        </div>
      </div>
    );
  }
}

export default Mobile;
