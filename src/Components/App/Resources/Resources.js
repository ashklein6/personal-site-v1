import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Resources extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Fade delay={1000} duration={2000}>
          <div className={classes.resources}>
            <div className={classes.card}>
              <h2 className={classes.header}>Resources</h2>
              <p>Take a peek at my <Link to="/resume" target="_blank">resume.</Link></p>
              <p>Here's a link to my <a href="https://www.linkedin.com/in/kleinashley/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Let's connect!</p>
              <p>My <a href="https://github.com/ashklein6/" target="_blank" rel="noopener noreferrer">GitHub</a> features some interesting projects I've been working on.</p>
              <p>(Including this application, which is <a href="https://github.com/ashklein6/personal-site" target="_blank" rel="noopener noreferrer">open-sourced.)</a></p>
            </div>
          </div>
        </Fade>
    );
  }
}

const styles = {
  resources: {
    webkitBackfaceVisibility: "hidden",
    // background: "linear-gradient(to bottom, #1F3F3D, #a5b2b1)",
    background: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textAlign: 'left'
  },
  card: {
    padding: 20,
    borderStyle: 'solid',
    textAlign: 'center',
  },
  date: {
    margin: '1vmin'
  },
  header: {
    textAlign: 'center',
    fontSize: "calc(15px + 2vmin)",
    marginTop: 5
  },
  h3: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: '1vmin'
  },
  h4: {
    fontSize: "calc(8px + 2vmin)",
    margin: '0.5vmin',
    marginBottom: 0,
    fontStyle: 'italic',
    fontWeight: 'normal'
  },
  section: {
    marginTop: '10%',
    marginBottom: '10%'
  }
};

export default withStyles(styles)(Resources);
