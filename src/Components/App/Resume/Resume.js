import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Technologies from './Sections/Technologies';
import WorkExperience from './Sections/WorkExperience';

class Resume extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Technologies />
        <WorkExperience />
      </React.Fragment>
    );
  }
}

const styles = {

};

export default withStyles(styles)(Resume);
