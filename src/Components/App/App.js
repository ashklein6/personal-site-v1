import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PageScroller from './PageScroller/PageScroller';
import Resume from './Resume/Resume';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={PageScroller}/>
          <Route exact path="/resume" component={Resume}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
