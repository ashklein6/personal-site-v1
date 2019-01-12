import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class Technologies extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <h3 className={classes.header}>TECHNOLOGIES</h3>
        </Grid>
        <Grid item xs={6} sm={4}> 
          <p className={classes.tech}>Arduino</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Bootstrap</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>CSS</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Express.js</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>GitHub</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>HTML</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Java</p>
        </Grid>
        <Grid item xs={6} sm={4}> 
          <p className={classes.tech}>JavaScript</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>jQuery</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Material UI</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Mongo</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Node.js</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Passport</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>PostgreSQL</p>
        </Grid>
        <Grid item xs={6} sm={4}> 
          <p className={classes.tech}>Postico</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Postman</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>React.js</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>React Native</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Redux</p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p className={classes.tech}>Sagas</p>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  header: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: '0.25vmin',
    textAlign: 'center',
    fontWeight: 'normal',
    letterSpacing: '0.2em',
  },
  tech: {
    textAlign: 'center'
  }
};

export default withStyles(styles)(Technologies);
