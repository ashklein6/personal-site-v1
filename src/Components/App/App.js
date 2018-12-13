import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  }

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
  }

  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <div className="Center">
        <React.Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <Header />
            <AboutMe />
          </ReactPageScroller>
        </React.Fragment>
        {/* <Header />
        <AboutMe /> */}
        {/* <div className="App-header2">
          <h1>
            Ashley Klein
          </h1>
        </div> */}
      </div>
    );
  }
}

export default App;
