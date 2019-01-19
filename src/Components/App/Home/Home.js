import React, { Component } from 'react';
import PageScroller from '../PageScroller/PageScroller';
import { isMobile } from 'react-device-detect';
import MobileHome from '../MobileHome/MobileHome';

class Home extends Component {
  state = {

  }

  render() {
    return (
      <React.Fragment>
        { isMobile ? <MobileHome /> : <PageScroller /> }
      </React.Fragment>
    );
  }
}

export default Home;
