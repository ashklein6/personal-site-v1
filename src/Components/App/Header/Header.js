import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';
import Octicon from 'react-octicon';
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

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
          <div className={classes.icons}>
            <Fade bottom delay={5000} duration={2000}>
              <Octicon mega name="mark-github" className={classes.info}/>
              <FaLinkedin className={classes.icon}/>
              <GoMarkGithub className={classes.icon}/>
            </Fade>
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
  icon: {
    display: 'inline-block'
  },
  icons: {
    position: 'fixed',
    bottom: '15%',
    justifyContent: 'center',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  subtitle: {
    height: "calc(10px + 2vmin)"
  }
};

export default withStyles(styles)(Header);
