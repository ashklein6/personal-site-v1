import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typing from 'react-typing-animation';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <h1>
            Ashley Klein
          </h1>
          <Typing loop speed={100} cursorClassName={styles.cursor}>
          <h3>
            Full-Stack Software Developer
            <Typing.Delay ms={2000} />
            <Typing.Backspace count={37} />
          </h3>
          </Typing>
        </div>
    );
  }
}

const styles = {
  cursor: {
    color: "white"
  },
  header: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  }
};

export default withStyles(styles)(Header);
