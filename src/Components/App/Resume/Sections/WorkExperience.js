import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';
import '../NoLink.css';

class WorkExperience extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={isMobile ? classes.divContainerMobile : classes.divContainer}>
        <h3 className={isMobile ? classes.headerMobile : classes.header}>WORK EXPERIENCE</h3>
        {/* <div className={classes.divSections}> */}
          <section className={classes.section}>
            <h3 className={classes.h3}>Runerra</h3>
            <h4 className={classes.h4}>React-Native Developer</h4>
            <p className={classes.date}>February 2019 - Present</p>
            <ul>
              <li>Worked on a mobile application that connected users with neighbors running errands.</li>
              <li>Added menus capability to application and piloted app design standardization.</li>
              <li>Scoped and executed front-end navigation infrastructure changes.</li>
              <li>Executed complex deep link functionality that required verification of user parameters prior to navigation.</li>
              <li>Collaborated with product team to plan future features of the mobile application.</li>
              <li>Troubleshot website plug-ins using HTML, CSS, and JavaScript.</li>
              <ul>
                <li>Technologies used: React Native, React.js, Redux, RxJS, TypeScript, GraphQL, and PostgreSQL.</li>
              </ul>
            </ul>
          </section>
          <section className={classes.section}>
            <h3 className={classes.h3}>Ashley Klein Photography</h3>
            <h4 className={classes.h4}>Owner, Photographer</h4>
            <p className={classes.date}>September 2018 - Present</p>
            <ul>
              <li>Demonstrate artistic vision while developing a unique and personal style.</li>
              <li>Communicate with clients to coordinate and understand their needs.</li>
              <li>Primary focus on portrait and wedding photography utilizing Adobe Lightroom.</li>
              <li>Portfolio is available at <a href="https://ashleyklein.photography" target="_blank" rel="noopener noreferrer">www.ashleyklein.photography</a>.</li>
            </ul>
          </section>
          <section className={classes.section}>
            <h3 className={classes.h3}>Prime Digital Academy</h3>
            <h4 className={classes.h4}>Full-Stack Software Engineering Student</h4>
            <p className={classes.date}>August 2018 - January 2019</p>
            <ul>
              <li>Developed a mobile application independently that allowed users to connect with friends to see their friends’ free times and easily make plans</li>
              <ul>
                <li>Technologies used: React Native, React.js, Redux, Sagas, Expo, Node.js, Express.js, Passport, and PostgreSQL.</li>
              </ul>
              <li>Collaborated with 4 peers in an Agile environment to create a web application for Marnita’s Table, a nonprofit that seeks to close gaps across difference by intentionally including and valuing people who are traditionally unheard and excluded at the policy-making and resource-sharing table.</li>
              <ul>
                <li>The application features an editing suite that will allow Marnita’s Table employees to input their research and analysis from their interactions. The information can be published and is then accessible to the public in an inviting, easy-to-navigate format.</li>
                <li>Technologies used: React.js, Redux, Sagas, Node.js, Express.js, Passport, PostgreSQL, Chart.js, and Material-UI.</li>
              </ul>
            </ul>
          </section>
          <section className={classes.section}>
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
          <section className={classes.section}>
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
          <section className={classes.section}>
            <h3 className={classes.h3}>Enerpac</h3>
            <h4 className={classes.h4}>Product Development Co-Op - Integrated Solutions</h4>
            <p className={classes.date}>January 2016 - August 2016</p>
            <ul style={{marginBottom: 0}}>
              <li>Generated quotes of custom products that lead to over $65,000 in sales.</li>
              <li>Delivered new custom products through design, development and evaluation.</li>
              <li>Communicated with sourcing, operators, engineers, suppliers, and sales to develop products.</li>
              <li>Assisted manufacturing floor to troubleshoot assembly operations and optimize designs.</li>
            </ul>
          </section>
        {/* </div> */}
      </div>
    );
  }
}

const styles = {
  date: {
    margin: '0.5vmin',
    marginLeft: 10,
  },
  divContainer: {
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between'
  },
  divContainerMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between'
  },
  h3: {
    fontSize: "calc(12px + 1vmin)",
    marginBottom: '0.25vmin',
    letterSpacing: '0.05em',
    marginTop: 0,
    marginLeft: 10,
  },
  h4: {
    fontSize: "calc(12px + 1vmin)",
    margin: '0.25vmin',
    fontStyle: 'italic',
    fontWeight: 'normal',
    marginLeft: 10,
  },
  header: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: 'calc(0.25vmin + 16px)',
    textAlign: 'center',
    fontWeight: 'normal',
    letterSpacing: '0.2em',
    flexGrow: 1
  },
  headerMobile: {
    fontSize: "calc(10px + 2vmin)",
    marginBottom: 'calc(0.25vmin + 16px)',
    textAlign: 'center',
    fontWeight: 'normal',
    letterSpacing: '0.2em',
  },
  section: {
    flexGrow: 1
  }
};

export default withStyles(styles)(WorkExperience);
