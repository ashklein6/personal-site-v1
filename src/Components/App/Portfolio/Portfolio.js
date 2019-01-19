import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Fade';
import Slider from 'react-animated-slider';
import './Portfolio.css';
import chillcal from './Images/chillcal.png';
import marnita_connect from './Images/marnita_connect.png';
import personal_site from './Images/personal_site.png';

let content = [
	{
		title: 'ChillCal',
		description:
      `ChillCal is an anti-calendar application that focuses on free time rather than busy time. A 
      connection-based app, users enter in times where they are available and their friends may 
      request to “chill” during those times. Complete with a wintry, penguin theme, ChillCal is a 
      clean, easy-to-follow web-based mobile application. Note: the chillcal-api project contains the server code.`,
    technologies: ['Technologies used: JavaScript, React.js, Node.js, React Native, Redux, Saga, React-Native-Modal-DateTime-Picker, PostgreSQL, Express.js, Passport'],
    button: [
      {text: 'View ChillCal GitHub', url: 'https://github.com/ashklein6/chillcal'},
      {text: 'View ChillCal-API GitHub', url: 'https://github.com/ashklein6/chillcal-api'}
    ],
		image: chillcal,
	},
	{
		title: `MarnitaConnect`,
		description:
      `This application for Marnita's Table displays the reports (360s) generated from Intentional 
      Social Interactions (IZI). It allows visitors and clients to search through and view the 360s. 
      The application also features a managing suite that allows Employees and Admins to create, edit, and publish 360s and control user viewing permissions.`,
    technologies: ['Technologies used: JavaScript, Node.js, React, Redux, Saga, Material-UI, PostgreSQL, Chart.js, Nodemailer, Passport'],
    button: [
      {text: 'View MarnitaConnect GitHub', url: 'https://github.com/ashklein6/marnita-connect'}
    ],
		image: marnita_connect,
  },
  {
    title: `Personal Site`,
    description:
      `This is the application that you are currently viewing, on which I explored animations and 
      developed a clean, streamlined personal site. It renders content differently (different orders 
      and styles) depending on whether viewed from a desktop or mobile browser.`,
    technologies: ['Technologies used: React.js, Material-UI, React-reveal, React-icons, React-page-scroller'],
    button: [
      {text: 'View Personal Site GitHub', url: 'https://github.com/ashklein6/personal-site'}
    ],
    image: personal_site
  }
];

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Zoom delay={1000} duration={2000}>
          <div className={classes.portfolio}>
            { isMobile ? 
              <React.Fragment>
                <h2 className={classes.header}>Portfolio</h2>
                {content.map((project, index) => (
                  <React.Fragment>
                    <div className={classes.divProject}>
                      <img src={project.image} alt="application-screenshot" className={classes.image}/>
                      <div className={classes.divTitle}>
                        <h1>{project.title}</h1>
                      </div>
                    </div>
                    <div>
                      <div className="inner-mobile">
                        <p>{project.description}</p>
                        <p>{project.technologies}</p>
                        <div style={{textAlign: 'center', marginBottom: 30}}>
                          {project.button.map((button, index) => (
                            <button key={index} onClick={() => {window.open(button.url)}} className={classes.buttonMobile}>{button.text}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                    </React.Fragment>))}
              </React.Fragment>
            :
              <div className={classes.card}>
                <h2 className={classes.header}>Portfolio</h2>
                <Slider infinite>
                {/* <Slider infinite autoplay={5000}> */}
                  {content.map((project, index) => (
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${project.image}') no-repeat center center`, backgroundSize: 'contain' }}
                    >
                      <div className="inner">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <p>{project.technologies}</p>
                        {project.button.map((button, index) => (
                          <button key={index} onClick={() => {window.open(button.url)}} className={classes.button}>{button.text}</button>
                        ))}
                      </div>
                    </div>))}
                </Slider>
              </div>
            }
          </div>
        </Zoom>
    );
  }
}

const styles = {
  portfolio: {
    webkitBackfaceVisibility: "hidden",
    background: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textAlign: 'left'
  },
  button: {
    border: 'none',
    background: '#272727',
    color: 'white',
    borderRadius: 30,
    textTransform: 'uppercase',
    boxSizing: 'border-box',
    padding: '15px 40px',
    fontWeight: 400,
    fontSize: 13,
    cursor: 'cursor',
    marginLeft: 5,
    marginRight: 5,
    '&:hover': {
      color: 'lightgrey',
      background: 'black',
      webkitFilter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))',
      filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))',
    }
  },
  buttonMobile: {
    border: 'none',
    background: '#272727',
    color: 'white',
    borderRadius: 30,
    textTransform: 'uppercase',
    boxSizing: 'border-box',
    padding: '15px 40px',
    fontWeight: 400,
    fontSize: 13,
    cursor: 'cursor',
    margin: 'auto',
    marginBottom: 10,
    display: 'block',
    '&:hover': {
      color: 'lightgrey',
      background: 'black',
      webkitFilter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))',
      filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))',
    }
  },
  card: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    margin: '7%',
    padding: 5,
    textAlign: 'center',
    width: 'calc(86% - 20px)',
    height: '90%'
  },
  chip: {
    margin: '5px 5px 0px 5px',
    borderColor: '#272727'
  },
  date: {
    margin: '1vmin'
  },
  divProject: {
    position: 'relative',
    textAlign: 'center',
    color: 'black'
  },
  divTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  fab : {
    backgroundColor: '#272727',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  header: {
    textAlign: 'center',
    fontSize: "calc(15px + 2vmin)",
    marginTop: 5
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
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  section: {
    marginTop: '10%',
    marginBottom: '10%'
  },
  slider: {
    flexGrow: 1,
    backgroundColor: 'red'
  }
};

export default withStyles(styles)(Portfolio);
