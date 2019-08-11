import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
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
          { isMobile ? 
            <div className={classes.mobileResume}>
              <InfoSection />
              <Technologies />
              <Education />
              <WorkExperience />
              <Interests />
            </div>
          :
            <React.Fragment>
              <Grid item xs={12} sm={4} className={classes.leftSection}>
                <InfoSection />
                <Technologies />
                <Education />
                <Interests />
              </Grid>
              <Grid item xs={12} sm={8}>
                <WorkExperience />
              </Grid>
            </React.Fragment>
          }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  mobileResume: {
    margin: '5%'
  },
  header: {
    textAlign: 'center',
    fontSize: "calc(15px + 5vmin)",
    letterSpacing: '0.5em',
    fontWeight: 'normal',
    marginTop: 25
  },
  leftSection: {
    borderRight: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowX: 'hidden'
  }
};

export default withStyles(styles)(Resume);
