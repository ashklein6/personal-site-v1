import React, { Component } from 'react';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
import Resources from '../Resources/Resources';

class DesktopHome extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <AboutMe />
        <Education />
        <Portfolio />
        <Resources />
      </React.Fragment>
    );
  }
}

export default DesktopHome;
