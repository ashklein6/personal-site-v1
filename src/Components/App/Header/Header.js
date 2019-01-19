import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { IconContext } from "react-icons";
import { FaLinkedin, FaEnvelopeSquare, FaGithubSquare } from 'react-icons/fa';
import { MdAccountBox } from 'react-icons/md';

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.header}>
          <Fade top delay={50} duration={2000}>
            <h1>
              Ashley Klein
            </h1>
          </Fade>
          <div className={classes.subtitle}>
            <Typing loop speed={100} count={29} cursorClassName={classes.cursor} startDelay={1500}>
              <h3>
                Full-Stack Software Developer
                <Typing.Backspace count={28} delay={5000} />
              </h3>
            </Typing>
          </div>
          <div className={ isMobile ? classes.iconsMobile : classes.icons}>
            <Fade bottom delay={5000} duration={2000}>
                <div>
                  <IconContext.Provider value={{ color: "black", size: "1.75em" }}>
                    <div className={classes.icon}>
                      <Tooltip title={'Click to go to my resume!'}>
                          <IconButton aria-label="resume" onClick={() => this.props.history.push("/resume")} classes={{root: classes.iconButton2}}>
                            <MdAccountBox />
                          </IconButton>
                      </Tooltip>
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
                    <div className={classes.icon}>
                      <a href="https://www.linkedin.com/in/kleinashley/" target="_blank" rel="noopener noreferrer">
                        <Tooltip title={'Click to check out my LinkedIn!'}>
                          <IconButton aria-label="linked-in" classes={{root: classes.iconButton}}>
                            <FaLinkedin />
                          </IconButton>
                        </Tooltip>
                      </a>
                    </div>
                    <div className={classes.icon}>
                      <a href="https://github.com/ashklein6" target="_blank" rel="noopener noreferrer">
                        <Tooltip title={'Click to visit my GitHub!'}>
                          <IconButton aria-label="github" classes={{root: classes.iconButton}}>
                            <FaGithubSquare />
                          </IconButton>
                        </Tooltip>
                      </a>
                    </div>
                    <div className={classes.icon}>
                      <Tooltip title={'Click to copy my email address to your clipboard!'}>
                        <CopyToClipboard text={'ashklein6@gmail.com'}>
                          <IconButton aria-label="envelope" classes={{root: classes.iconButton}}>
                            <FaEnvelopeSquare />
                          </IconButton>
                        </CopyToClipboard>
                      </Tooltip>
                    </div>
                  </IconContext.Provider>
                </div>
            </Fade>
          </div>
        </div>
    );
  }
}

const styles = {
  cursor: {
    color: "black",
  },
  header: {
    webkitBackfaceVisibility: "hidden",
    background: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    display: 'inline-block'
  },
  iconButton: {
    padding: 5,
    borderRadius: 5,
  },
  iconButton2: {
    padding: 3,
    borderRadius: 5,
  },
  icons: {
    position: 'fixed',
    bottom: '15%',
    justifyContent: 'center',
    left: '50%',
    transform: 'translate(-50%, 0)',
    textAlign: 'center'
  },
  iconsMobile: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '20%'
  },
  subtitle: {
    height: "calc(10px + 2vmin)"
  }
};

export default withRouter(withStyles(styles)(Header));
