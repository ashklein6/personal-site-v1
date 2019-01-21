import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

class AboutMe extends Component {
  render() {
    const { classes } = this.props;
    console.log('rendering about me');
    return (
          <div className={ isMobile ? classes.aboutMeMobile : classes.aboutMe }>
            <span className={classes.block}>
              <Fade delay={500} duration={2000}>
                <div className={classes.text}>
                  My name is 
                </div>
              </Fade>
              <Fade top delay={700} duration={2000}>
                <div className={classes.highlightedText}>
                  &nbsp;Ashley Klein
                </div>
              </Fade>
              <Fade delay={500} duration={2000}>
                <div className={classes.text}>
                  .
                </div>
              </Fade>
            </span>
            <span className={classes.block}>
              <Fade delay={1000} duration={2000}>
                <div className={classes.text}>
                  I am a&nbsp;
                </div>
              </Fade>
              <Fade left delay={1700} duration={2000}>
                <div className={classes.highlightedText2}>
                  &nbsp;Full-Stack Web Developer&nbsp;
                </div>
              </Fade>
              <Fade delay={1000} duration={2000}>
                <div className={classes.text}>
                  &nbsp;that thrives in a
                </div>
              </Fade>
            </span>
            <span className={classes.block}>
              <Fade right delay={2700} duration={2000}>
                <div className={classes.highlightedText}>
                  fast-paced
                </div>
              </Fade>
              <Fade delay={1500} duration={2000}>
                <div className={classes.text}>
                  &nbsp;environment and is driven by the desire
                </div>
              </Fade>
            </span>
            <span className={classes.block}>
              <Fade delay={2000} duration={2000}>
                <div className={classes.text}>
                  to design
                </div>
              </Fade>
              <Fade left delay={3700} duration={2000}>
                <div className={classes.highlightedText}>
                  &nbsp;creative,
                </div>
              </Fade>
              <Fade top delay={3800} duration={2000}>
                <div className={classes.highlightedText}>
                  &nbsp;efficient,
                </div>
              </Fade>
              <Fade delay={2000} duration={2000}>
                <div className={classes.text}>
                  &nbsp;and
                </div>
              </Fade>
              <Fade bottom delay={3900} duration={2000}>
                <div className={classes.highlightedText}>
                  &nbsp;robust
                </div>
              </Fade>
              <Fade delay={2000} duration={2000}>
                <div className={classes.text}>
                  &nbsp;solutions.
                </div>
              </Fade>
            </span>
          </div>
    );
  }
}

const styles = {
  aboutMe: {
    webkitBackfaceVisibility: "hidden",
    background: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "calc(15px + 2vmin)",
    color: "black",
    padding: 80,
  },
  aboutMeMobile: {
    webkitBackfaceVisibility: "hidden",
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "calc(15px + 2vmin)",
    color: "black",
    padding: 80
  },
  block: {
    display: 'block',
  },
  highlightedText: {
    display: 'inline-block',
    color: 'black',
    fontWeight: 'bold'
  },
  highlightedText2: {
    backgroundColor: 'black',
    color: 'white',
    display: 'inline-block',
    fontWeight: 'bold'
  },
  text: {
    display: 'inline-block',
    color: 'black'
  },
};

export default withStyles(styles)(AboutMe);
