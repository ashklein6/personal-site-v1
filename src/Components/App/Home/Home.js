import React, { Component } from 'react';
import PageScroller from '../PageScroller/PageScroller';
import { isMobile } from 'react-device-detect';
import MobileHome from '../MobileHome/MobileHome';
import DesktopHome from '../DesktopHome/DesktopHome';

var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;

class Home extends Component {
  state = {
    fullAnimations: false
  }

  componentDidMount() {
    if (
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isIEedge === false
    ) {
       // is Google Chrome or Opera
       this.setState({
         fullAnimations: true
       });
    } 
  }

  render() {
    return (
      <React.Fragment>
        { isMobile ? <MobileHome /> : 
        (this.state.fullAnimations ? <PageScroller /> : <DesktopHome />) }
      </React.Fragment>
    );
  }
}

export default Home;
