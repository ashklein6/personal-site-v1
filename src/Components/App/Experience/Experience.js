import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Experience extends Component {
  render() {
    const { classes } = this.props;

    return (
          <div className={classes.experience}>
            <div className={classes.card}>
              <h2 className={classes.header}>Experience</h2>
              <section>
                <h3 className={classes.h3}>Prime Digital Academy</h3>
                <h4 className={classes.h4}>Full-Stack Software Engineering Student</h4>
                <ul>
                  <li> Developed a mobile application independently that allowed users to connect with friends to see their friends’ free times and easily make plans</li>
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
                <ul>
                  <li>Developed subsystems of a dispensing system of a radioactive pharmaceutical through design and testing phases, including defining design inputs and system requirements.</li>
                  <li>Designed and conducted testing of dispensing system's hardware and software components and implemented corrections to improve functionality.</li>
                  <li>Contributed to writing and executing qualification procedures for dispensing system to be in compliance with 21 CFR Part 210 and 211.</li>
                  <li>Participated in team process hazard reviews, including developing FMEAS.</li>
                  <li>Performed 3D design and 2D drafting in SolidWorks.</li>
                  <li>Followed cGMP and GDP best practices.</li>
                </ul>
              </section>
            </div>
          </div>
    );
  }
}

const styles = {
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
  card: {
    margin: '7%',
    padding: 20,
    borderStyle: 'solid',
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
    fontStyle: 'italic',
    fontWeight: 'normal'
  },
};

export default withStyles(styles)(Experience);
