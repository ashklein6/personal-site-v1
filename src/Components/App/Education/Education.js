import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Fade';

class Education extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Zoom delay={1000} duration={2000}>
          <div className={classes.education}>
            <div className={classes.card}>
              <h2 className={classes.header}>Education</h2>
              <section className={classes.section}>
                <h3 className={classes.h3}>Prime Digital Academy</h3>
                <h4 className={classes.h4}>Full-Stack Software Engineering Student</h4>
                <p className={classes.date}>Confer Date: January 2019</p>
              </section>
              <section className={classes.section}>
                <h3 className={classes.h3}>University of Wisconsin-Madison</h3>
                <h4 className={classes.h4}>Bachelor of Science in Mechanical Engineering</h4>
                <p className={classes.date}>Confer Date: May 2017</p>
              </section>
            </div>
          </div>
        </Zoom>
    );
  }
}

const styles = {
  education: {
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
    margin: '7%',
    padding: 20,
    borderStyle: 'solid',
    textAlign: 'center'
  },
  date: {
    margin: '1vmin'
  },
  header: {
    textAlign: 'center',
    fontSize: "calc(15px + 2vmin)",
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

export default withStyles(styles)(Education);
