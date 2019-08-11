import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { IconContext } from "react-icons";
import { FaCamera, FaBrain, FaHockeyPuck, FaUtensils, FaCampground, FaQuestion } from 'react-icons/fa';
import '../NoLink.css';

class Technologies extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <IconContext.Provider value={{ color: "black", size: "1em" }}>
          <Grid item xs={12}>
            <h3 className={classes.header}>INTERESTS</h3>
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <p className={classes.interest}><FaUtensils />&nbsp;Brunch</p>
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <p className={classes.interest}><FaCampground />&nbsp;Camping</p>
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <p className={classes.interest}><FaHockeyPuck />&nbsp;Hockey</p>
          </Grid>
          <Grid item xs={6} className={classes.center}> 
            <Tooltip title={'Click to go to my photography website!'}>
              <a href="https://ashleyklein.photography" target="_blank" rel="noopener noreferrer">
                <p className={classes.interest}><FaCamera />&nbsp;Photography</p>
              </a>
            </Tooltip>
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <p className={classes.interest}><FaBrain />&nbsp;Psychology</p>
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <p className={classes.interest}><FaQuestion />&nbsp;Trivia</p>
          </Grid>
        </IconContext.Provider>
      </Grid>
    );
  }
}

const styles = {
  center: {
    textAlign: 'center'
  },
  header: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: '0.25vmin',
    textAlign: 'center',
    fontWeight: 'normal',
    letterSpacing: '0.2em',
  },
  interest: {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'normal'
  }
};

export default withStyles(styles)(Technologies);
