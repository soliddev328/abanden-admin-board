import React from 'react'
import Layout from '../components/layout'
import reachOut from '../images/reach-out.png'
import '../styles/contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="left">
            <img src= { reachOut } className="arms" alt="pic"></img>
          </div>
          <div className="contact-right">
            <p className="connect-header">Let's connect!</p>
            <p className="connect-info">If you'd like to stay connected, join our <b><a href="https://join.slack.com/t/social-coders/shared_invite/enQtODc1NDM3NTYyNjU4LWU2MzJmOGE0Y2U2NDgyMTc4ZTQxYzJlNjM4MmJiZWU3Zjk1NmZiZTYyNTY1NTQxYTk3ZmEyNTI0YTVjNDRkNmU" className="about-link" target="_blank" rel="noopener noreferrer">Social Coders</a></b> Slack community! I created this workspace for anyone in the tech community to have discussions & get to know each other.
              Come hangout!
            </p>
            <div>
              <a href="https://www.linkedin.com/in/morganrmarie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } className="inner-about-contact" /></a>
              <a href="https://www.github.com/morganrmarie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } className="inner-about-contact" /></a>
              <a href="https://www.instagram.com/morgan.codes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram } className="inner-about-contact" /></a>
              <a href="https://www.twitter.com/morgancodes_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faTwitter } className="inner-about-contact" /></a>
              <a href="mailto:hello@morgancodes.co?subject=Morgan.Codes Inquiry"><FontAwesomeIcon icon={ faEnvelopeSquare } className="inner-about-contact" /></a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
