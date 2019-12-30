import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const technologies = ['Arduino', 'Bootstrap', 'CSS', 'EC2', 'Elastic Beanstalk', 'Express.js',
  'GitHub', 'GraphQL', 'HTML', 'JavaScript', 'Jest', 'Jira', 'jQuery', 'Material UI', 'MongoDB',
  'Node.js', 'Passport', 'PostgreSQL', 'Postico', 'Postman', 'React.js', 'React Native', 'Redux',
  'RxJS', 'S3', 'Sagas', 'TypeORM', 'TypeScript']

class Technologies extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <h3 className={classes.header}>TECHNOLOGIES</h3>
        </Grid>
        {technologies.map((tech) => {
          return  <Grid item xs={6} sm={4}> 
                    <p className={classes.tech}>{tech}</p>
                  </Grid>
        })}
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
