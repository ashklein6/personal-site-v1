import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Education extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h3 className={classes.header}>EDUCATION</h3>
        <section className={classes.section}>
          <h3 className={classes.h3}>Prime Digital Academy</h3>
          <h4 className={classes.h4}>Full-Stack Engineering</h4>
          <p className={classes.date}>Confer Date: January 2019</p>
        </section>
        <section className={classes.section}>
          <h3 className={classes.h3}>University of Wisconsin - Madison, <span className={classes.noWrap}>College of Engineering</span></h3>
          {/* <h3 className={classes.h3}>College of Engineering</h3> */}
          <h4 className={classes.h4}>Bachelors of Science in <span className={classes.noWrap}>Mechanical Engineering</span></h4>
          <p className={classes.date}>Confer Date: May 2017</p>
          <p className={classes.date}>Dean's List: Fall 2013, Fall 2015</p>
          <p className={classes.date}>GPA: 3.11 / 4.00</p>
        </section>
      </div>
    );
  }
}

const styles = {
  date: {
    margin: '0.5vmin',
  },
  h3: {
    fontSize: "calc(12px + 1vmin)",
    marginBottom: '0.25vmin',
    // letterSpacing: '0.05em',
    marginTop: 16
  },
  h4: {
    fontSize: "calc(12px + 1vmin)",
    margin: '0.25vmin',
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  header: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: '0.25vmin',
    textAlign: 'center',
    fontWeight: 'normal',
    letterSpacing: '0.2em',
  },
  noWrap: {
    whiteSpace: 'nowrap'
  },
  section: {
    marginBottom: 15,
    textAlign: 'center'
  }
};

export default withStyles(styles)(Education);
