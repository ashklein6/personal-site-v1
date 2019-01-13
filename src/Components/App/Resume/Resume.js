import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InfoSection from './Sections/InfoSection';
import Technologies from './Sections/Technologies';
import Education from './Sections/Education';
import WorkExperience from './Sections/WorkExperience';
import Interests from './Sections/Interests';

import './Print.css'

class Resume extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}> 
          <h2 className={classes.header}>ASHLEY KLEIN</h2>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={4} className={classes.leftSection}>
              <InfoSection />
              <Technologies />
              <Education />
              <Interests />
            </Grid>
            <Grid item xs={12} sm={8}>
              <WorkExperience />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  date: {
    margin: '0.5vmin',
  },
  experience: {
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
  header: {
    textAlign: 'center',
    fontSize: "calc(15px + 5vmin)",
    letterSpacing: '0.5em',
    fontWeight: 'normal',
    marginTop: 25
  },
  h3: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: '0.25vmin',
    letterSpacing: '0.05em',
  },
  h4: {
    fontSize: "calc(8px + 2vmin)",
    margin: '0.25vmin',
    fontStyle: 'italic',
    fontWeight: 'normal'
  },
  info: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: '1vmin',
    marginTop: '1vmin',
    letterSpacing: '0.05em',
    textAlign: 'right',
    display: 'inline-block'
  },
  infoDiv: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  infoSection: {
    marginTop: 'calc(5px + 2vmin)'
  },
  inline: {
    display: 'inline-block'
  },
  leftSection: {
    borderRight: '1px solid grey',
  }
};

export default withStyles(styles)(Resume);
