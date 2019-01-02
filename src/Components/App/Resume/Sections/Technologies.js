import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Octicon from 'react-octicon'

class Technologies extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <h2 className={classes.header}>Ashley Klein</h2>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={4} className={classes.leftSection}>
              <section className={classes.infoSection}>
                <div className={classes.infoDiv}>
                  <Octicon mega name="mail" className={classes.info}/>
                  <h3 className={classes.info}>ashklein6@gmail.com</h3>
                </div>
                <div className={classes.infoDiv}>
                  <Octicon mega name="browser" className={classes.info}/>
                  <h3 className={classes.info}>home.ashleyklein.me</h3>
                </div>
                <div className={classes.infoDiv}>
                  <Octicon mega name="mark-github" className={classes.info}/>
                  <h3 className={classes.info}>github.com/ashklein6</h3>
                </div>
              </section>
            </Grid>
            <Grid item xs={12} sm={8}>
              <section>
                <h3 className={classes.h3}>Prime Digital Academy</h3>
                <h4 className={classes.h4}>Full-Stack Software Engineering Student</h4>
                <p className={classes.date}>August 2018 - January 2019</p>
                <ul>
                  <li> Developed a mobile application independently that allowed users to connect withfriends to see their friends’ free times and easily make plans</li>
                  <ul>
                    <li> Technologies used: React Native, React.js, Redux, Sagas, Expo, Node.js, Express.js, Passport, and PostgreSQL.</li>
                  </ul>
                  <li>Collaborated with 4 peers in an Agile environment to create a web application for Marnita’s Table, a nonprofit that seeks to close gaps across difference by intentionally including and valuing people who are traditionally unheard and excluded at the policy-making and resource-sharing table.</li>
                  <ul>
                    <li>The application features an editing suite that will allow Marnita’s Table employees to input their research and analysis from their interactions. The information can be published and is then accessible to the public in an inviting, easy-to-navigate format.</li>
                    <li>Technologies used: React.js, Redux, Sagas, Node.js, Express.js, Passport, PostgreSQL, Chart.js, and Material-UI.</li>
                  </ul>
                </ul>
              </section>
              <section>
                <h3 className={classes.h3}>NorthStar Medical Radioisotopes</h3>
                <h4 className={classes.h4}>Mechanical Engineer - Isotope Processing</h4>
                <p className={classes.date}>June 2017 - July 2018</p>
                <ul>
                  <li>Developed subsystems of a dispensing system of a radioactive pharmaceutical through design and testing phases, including defining design inputs and system requirements.</li>
                  <li>Designed and conducted testing of dispensing system's hardware and software components and implemented corrections to improve functionality.</li>
                  <li>Contributed to writing and executing qualification procedures for dispensing system to be in compliance with 21 CFR Part 210 and 211.</li>
                  <li>Participated in team process hazard reviews, including developing FMEAS.</li>
                  <li>Performed 3D design and 2D drafting in SolidWorks.</li>
                  <li>Followed cGMP and GDP best practices.</li>
                </ul>
              </section>
              <section>
                <h3 className={classes.h3}>University of Wisconsin-Madison Athletic Department</h3>
                <h4 className={classes.h4}>Tutor</h4>
                <p className={classes.date}>September 2016 - December 2017</p>
                <ul>
                  <li>Assisted students with academic material in various calculus, physics, and engineering courses.</li>
                  <li>Received tutor certification from College Reading and Learning Association.</li>
                  <li>Cultivated the ability of becoming proficient in new material with a quick turnaround when I was asked to tutor a course that was an extension of my academic experience. </li>
                  <li>Deconstructed complex ideas in order to introduce new concepts to the students.</li>
                </ul>
              </section>
              <section>
                <h3 className={classes.h3}>Enerpac</h3>
                <h4 className={classes.h4}>Product Development Co-Op - Integrated Solutions</h4>
                <p className={classes.date}>January 2016 - August 2016</p>
                <ul>
                  <li>Generated quotes of custom products that lead to over $65,000 in sales.</li>
                  <li>Delivered new custom products through design, development and evaluation.</li>
                  <li>Communicated with sourcing, operators, engineers, suppliers, and sales to develop products.</li>
                  <li>Assisted manufacturing floor to troubleshoot assembly operations and optimize designs.</li>
                </ul>
              </section>
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
    fontSize: "calc(15px + 2vmin)",
    marginTop: 0
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
    borderRight: '1px solid',
  }
};

export default withStyles(styles)(Technologies);
