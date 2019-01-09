import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
import Resources from '../Resources/Resources';
import { IconContext } from "react-icons";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

class PageScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this._pageScroller = null;
  }

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
    console.log('on page:', this.state.currentPage);
  }

  scrollDown = () => {
    let newPage = this.state.currentPage;
    this._pageScroller.goToPage(newPage);
  }

  scrollUp = () => {
    let newPage = this.state.currentPage-2;
    console.log('new page attempt:', newPage);
    this._pageScroller.goToPage(newPage);
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
          <Header />
          <AboutMe />
          <Education />
          <Portfolio />
          <Resources />
        </ReactPageScroller>
        {(this.state.currentPage > 1) ? 
        <div className={classes.scrollUp}>
          <Fade top delay={500}>
            <div onClick={() => this.scrollUp()}>
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <FaChevronUp />
              </IconContext.Provider>
            </div> 
          </Fade>
        </div> : null }
        {(this.state.currentPage < 5) ? 
        <div className={classes.scrollDown}>
          <Fade bottom delay={500}>
            <div onClick={() => this.scrollDown()}>
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </Fade>
        </div> : null }
      </React.Fragment>
    );
  }
}

const styles = {
  scrollDown: {
    position: 'fixed',
    bottom: '5%',
    textAlign: 'center',
    width: '100%'
  },
  scrollUp: {
    position: 'fixed',
    top: '5%',
    textAlign: 'center',
    width: '100%'
  }
};

export default withStyles(styles)(PageScroller);
