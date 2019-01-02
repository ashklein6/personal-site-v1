import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience';

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
          <Experience />
        </ReactPageScroller>
        {(this.state.currentPage > 1) ? 
        <div className={classes.scrollUp} onClick={() => this.scrollUp()}>
          &#x25B2;
        </div> : null }
        <div className={classes.scrollDown} onClick={() => this.scrollDown()}>
          &#x25BC;
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  scrollDown: {
    position: 'fixed',
    bottom: '5%',
    justifyContent: 'center',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  scrollUp: {
    position: 'fixed',
    top: '5%',
    justifyContent: 'center',
    left: '50%',
    transform: 'translate(-50%, 0)',
  }
};

export default withStyles(styles)(PageScroller);
