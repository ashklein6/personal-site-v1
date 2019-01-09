import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Fade';
import { IconContext } from "react-icons";
import { FaGraduationCap } from 'react-icons/fa';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Chip from '@material-ui/core/Chip';

let content = [
	{
		title: 'ChillCal',
		description:
      'ChillCal is an anti-calendar application that focuses on free time rather than busy time. A connection-based app, users enter in times where they are available and their friends may request to “chill” during those times. Complete with a wintry, penguin theme, ChillCal will be a clean, easy-to-follow web-based mobile application.',
    technologies: ['React Native','PostgreSQL'],
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
	},
	{
		title: 'Tortor Dapibus',
		description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    technologies: ['React.js','PostgreSQL'],
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Samantha',
		userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
	},
	{
		title: 'Another one',
		description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    technologies: ['React.js','PostgreSQL'],
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Samantha',
		userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
  },
];

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Zoom delay={1000} duration={2000}>
          <div className={classes.education}>
            <div className={classes.card}>
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <FaGraduationCap />
              </IconContext.Provider>
              <h2 className={classes.header}>Portfolio</h2>
              <Slider infinite autoplay={5000}>
                {content.map((article, index) => <div key={index}>
                  <h2>{article.title}</h2>
                  <div>{article.description}</div>
                  <div>
                    {article.technologies.map((tech, index) => {
                      return (<Chip key={index} label={tech} />)
                    })}
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
    textAlign: 'center',
    width: 'calc(86% - 20px)',
    height: '90%'
  },
  date: {
    margin: '1vmin'
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
  section: {
    marginTop: '10%',
    marginBottom: '10%'
  }
};

export default withStyles(styles)(Portfolio);
