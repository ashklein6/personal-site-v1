import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    color: "black",
  },
  header: {
    webkitBackfaceVisibility: "hidden",
    // background: "linear-gradient(to bottom, black, #1F3F3D)",
    background: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
  },
  subtitle: {
    height: "calc(10px + 2vmin)"
  }
};

export default withStyles(styles)(Header);
