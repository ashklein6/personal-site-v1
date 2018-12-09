import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './Header.css';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.header}>
          <Fade top delay={50} duration={2000}>
            <h1>
              Ashley Klein
            </h1>
          </Fade>
          <div className={classes.subtitle}>
            <Typing loop speed={100} count={29} cursorClassName={classes.cursor} startDelay={1500}>
              <h3>
                Full-Stack Software Developer
                <Typing.Backspace count={28} delay={5000} />
              </h3>
            </Typing>
          </div>
        </div>
    );
  }
}

const styles = {
  cursor: {
    color: "white",
  },
  header: {
    background: "linear-gradient(to bottom right, black, #1F3F3D)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  subtitle: {
    height: "calc(10px + 2vmin)"
  }
};

export default withStyles(styles)(Header);
