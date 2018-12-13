import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';

class AboutMe extends Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.aboutMe}>
          <div className={classes.subtitle}>
            <Zoom delay={1000}>
              <h1>
                About Me
              </h1>
            </Zoom>
          </div>
          <Fade top delay={1500} duration={2000}>
            <h5 className={classes.bio}>
            Greetings! My name is Ashley Klein and I am a hard-working 
            mechanical-engineer-turned-software-developer that thrives
            in a fast-paced environment and is driven by the desire to
            design creative, efficient, and robust solutions. I enjoy
            each stage of the development process with a focus on 
            collaboration and an appetite for learning.
            <br></br><br></br>
            After completing college, I worked as a Mechanical Engineer 
            in the pharmaceutical industry at NorthStar Medical, a company 
            that develops nuclear radioisotopes. Working in this position, 
            I discovered a passion for software development and all-things 
            logic-based and decided to pursue a career in the software realm.
            I enrolled in Prime Digital Academy, a 20-week full-time immersive 
            program, to enhance my programming skills and begin my transition 
            into software engineering.
            </h5>
          </Fade>
        </div>
    );
  }
}

const styles = {
  bio: {
    display: "flex",
    align: "center",
    margin: 0,
    maxWidth: "80%",
    minHeight: "50%vh"
  },
  cursor: {
    color: "white",
  },
  aboutMe: {
    webkitBackfaceVisibility: "hidden",
    background: "linear-gradient(to bottom, #1F3F3D, #a5b2b1)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    padding: 40
  },
  subtitle: {
    display: "flex",
    align: "center",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "25%vh"
  }
};

export default withStyles(styles)(AboutMe);
