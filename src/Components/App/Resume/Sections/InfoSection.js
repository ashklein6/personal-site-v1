import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import { IconContext } from "react-icons";
import { FaDesktop, FaLinkedin, FaEnvelopeSquare, FaGithubSquare } from 'react-icons/fa';
import '../NoLink.css';

class InfoSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.infoSection}>
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
          <div>
            <div className={classes.icon}>
              <Link to="/" target="_blank">
                <IconButton aria-label="Envelope" classes={{root: classes.iconButton}}>
                  <FaDesktop /><h3 className={classes.info}>home.ashleyklein.me</h3>
                </IconButton>
              </Link>
            </div>
            <div className={classes.icon}>
              <a href="https://www.linkedin.com/in/kleinashley/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Envelope" classes={{root: classes.iconButton}}>
                  <FaLinkedin /><h3 className={classes.info}>linkedin.com/in/kleinashley</h3>
                </IconButton>
              </a>
            </div>
            <div className={classes.icon}>
              <a href="https://github.com/ashklein6" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Envelope" classes={{root: classes.iconButton}}>
                  <FaGithubSquare /><h3 className={classes.info}>github.com/ashklein6</h3>
                </IconButton>
              </a>
            </div>
            <div className={classes.icon}>
              <Tooltip title={'Click to copy my email address to your clipboard!'}>
                <CopyToClipboard text={'ashklein6@gmail.com'}>
                  <IconButton aria-label="Envelope" classes={{root: classes.iconButton}}>
                    <FaEnvelopeSquare /><h3 className={classes.info}>ashklein6@gmail.com</h3>
                  </IconButton>
                </CopyToClipboard>
              </Tooltip>
            </div>
          </div>
        </IconContext.Provider>
      </section>
    );
  }
}

const styles = {
  iconButton: {
    padding: 5,
    borderRadius: 5,
    textDecoration: 'none'
  },
  info: {
    fontSize: "calc(10px + 1vmin)",
    marginBottom: '1vmin',
    marginTop: '1vmin',
    marginLeft: '1vmin',
    letterSpacing: '0.05em',
    textAlign: 'right',
    display: 'inline-block',
    textDecoration: 'none',
    color: 'black'
  },
  infoDiv: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  infoSection: {
    marginTop: 'calc(5px + 2vmin)'
  },
};

export default withStyles(styles)(InfoSection);
