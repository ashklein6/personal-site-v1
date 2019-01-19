import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Fade';
import Slider from 'react-animated-slider';
import './Portfolio.css';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import chillcal_1 from './Images/chillcal_1.png';
import marnita_connect from './Images/marnita_connect.png';

let content = [
	{
		title: 'ChillCal',
		description:
      `ChillCal is an anti-calendar application that focuses on free time rather than busy time. A 
      connection-based app, users enter in times where they are available and their friends may 
      request to “chill” during those times. Complete with a wintry, penguin theme, ChillCal is a 
      clean, easy-to-follow web-based mobile application. Note: the chillcal-api project contains the server code.`,
    technologies: ['JavaScript','React.js', 'Node.js', 'React Native', 'Redux', 'Saga', 'React-Native-Modal-DateTime-Picker', 'PostgreSQL', 'Express.js', 'Passport'],
    button: [
      {text: 'View ChillCal GitHub', url: 'https://github.com/ashklein6/chillcal'},
      {text: 'View ChillCal-API GitHub', url: 'https://github.com/ashklein6/chillcal-api'}
    ],
		image: chillcal_1,
	},
	{
		title: `Marnita's Table`,
		description:
      `This application for Marnita's Table displays the reports (360s) generated from Intentional 
      Social Interactions (IZI). It allows visitors and clients to search through and view the 360s. 
      The application also features a managing suite that allows Employees and Admins to create, edit, and publish 360s and control user viewing permissions.`,
    technologies: ['JavaScript','Node.js','React','Redux','Saga','Material-UI','PostgreSQL','Chart.js','Nodemailer','Passport'],
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
    technologies: ['React.js','Material-UI','React-reveal','React-icons','React-page-scroller'],
    button: [
      {text: 'View Personal Site GitHub', url: 'https://github.com/ashklein6/personal-site'}
    ],
    // image: null
  }
];

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Zoom delay={1000} duration={2000}>
          <div className={classes.portfolio}>
            <div className={classes.card}>
              <h2 className={classes.header}>Portfolio</h2>
              <Slider infinite>
              {/* <Slider infinite autoplay={5000}> */}
                {content.map((project, index) => 
                  <div key={index}>
                    <div className={classes.divImage}>
                      <img src={project.image} alt="application screenshot" className={classes.image}/>
                    </div>
                    <div className={classes.divText}>
                      <h2>{project.title}</h2>
                      <div>{project.description}</div>
                      <div>
                        {project.technologies.map((tech, index) => {
                          return (<Chip key={index} variant="outlined" className={classes.chip} label={tech} />)
                        })}
                        {project.button.map((item, index) => {
                          return (<Fab key={index} variant="extended" className={classes.fab}>
                                    {item.text}
                                  </Fab>)
                        })}
                    </div>
                  </div>
                </div>)}
              </Slider>
            </div>
          </div>
        </Zoom>
    );
  }
}

const styles = {
  portfolio: {
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
  divImage: {
    width: 'calc(50% - 50px)',
    height: '100%',
    display: 'flex',
    float: 'left',
    marginLeft: 80,
    justifyContent: 'center'
  },
  divText: {
    width: 'calc(36% - 50px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    float: 'right',
    marginRight: 80
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
