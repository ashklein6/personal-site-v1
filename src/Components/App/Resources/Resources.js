import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Resources extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Fade delay={1000} duration={2000}>
          <div className={ isMobile ? classes.resourcesMobile : classes.resources }>
            <div className={classes.card}>
              <h2 className={classes.header}>Resources</h2>
              <p>Take a peek at my <Link to="/resume" target="_blank" className={classes.link}>resume.</Link></p>
              <p>Here's a link to my <a href="https://www.linkedin.com/in/kleinashley/" target="_blank" rel="noopener noreferrer" className={classes.link}>LinkedIn</a>. Let's connect!</p>
              <p>My <a href="https://github.com/ashklein6/" target="_blank" rel="noopener noreferrer" className={classes.link}>GitHub</a> features some interesting projects I've been working on.</p>
              <p>(Including this application, which is <a href="https://github.com/ashklein6/personal-site" target="_blank" rel="noopener noreferrer" className={classes.link}>open-sourced.)</a></p>
            </div>
          </div>
        </Fade>
    );
  }
}

const styles = {
  resources: {
    webkitBackfaceVisibility: "hidden",
    background: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textAlign: 'left'
  },
  resourcesMobile: {
    webkitBackfaceVisibility: "hidden",
    background: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textAlign: 'left',
    margin: '5%'
  },
  card: {
    padding: 20,
    borderStyle: 'solid',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: "calc(15px + 2vmin)",
    marginTop: 5
  },
  link: {
    color: 'darkgrey',
    fontWeight: 600
  },
};

export default withStyles(styles)(Resources);
