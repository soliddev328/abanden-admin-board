import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../styles/about.css'
import morganCodes from '../images/morgancodes.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Morgan Richardson</title>
        <meta name="description" content="About Morgan - Morgan is a software developer and designer based in Chicago, IL and creates content on Instagram at @morgan.codes. When Morgan's not coding, she's exploring the city and exploring new technologies." />
      </Helmet>
      <Layout>
        <div className="about-container">
          <div className="inner-about-container">
            <h2 className="inner-about-header">About Me</h2>
            <p className="inner-about-description about-me">Hello, world! I'm Morgan Richardson, also known as <b><a href="https://www.instagram.com/morgan.codes" className="about-link" target="_blank" rel="noopener noreferrer">@morgan.codes</a></b> on Instagram. I'm 
            currently working as a Software Developer at <b><a href="https://runoranj.com/" className="about-link" target="_blank" rel="noopener noreferrer">Oranj</a></b> in Chicago. One of my goals as a social media influencer has been to connect
            my followers with one-another to form a community of passionate, dedicated developers. I recently started <b><a href="https://join.slack.com/t/social-coders/shared_invite/enQtODc1NDM3NTYyNjU4LWU2MzJmOGE0Y2U2NDgyMTc4ZTQxYzJlNjM4MmJiZWU3Zjk1NmZiZTYyNTY1NTQxYTk3ZmEyNTI0YTVjNDRkNmU" className="about-link" target="_blank" rel="noopener noreferrer">Social Coders</a></b>, which
            is a community-based Slack workspace for tech lovers to network and have discussions. Everyone is welcome to join!
            </p>
            <div>
              <a href="https://www.linkedin.com/in/morganrmarie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } className="inner-about-contact" /></a>
              <a href="https://www.github.com/morganrmarie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } className="inner-about-contact" /></a>
              <a href="https://www.instagram.com/morgan.codes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram } className="inner-about-contact" /></a>
              <a href="https://www.twitter.com/morgancodes_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faTwitter } className="inner-about-contact" /></a>
              <a href="mailto:hello@morgancodes.co?subject=Morgan.Codes Inquiry"><FontAwesomeIcon icon={ faEnvelopeSquare } className="inner-about-contact" /></a>
            </div>
            <img className="morgan-headshot" src={ morganCodes } alt="Morgan Richardson About" />
          </div>
          <div className="inner-about-container">
            <h2 className="inner-about-header">My Skills</h2>
            <p className="inner-about-description">Apart from the courses I've taken in college, I've taken a number of online courses the further my skills. Some
              of these online courses I've taken include <b><a class="course-link" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noopener noreferrer">The React Complete Guide</a></b>, <b><a class="course-link" href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" rel="noopener noreferrer">The Complete JavaScript Course</a></b>, and 
              &nbsp;<b><a className="course-link" href="https://www.udemy.com/course/learn-html-css-by-building-3-real-projects/" target="_blank" rel="noopener noreferrer">HTML & CSS for Beginners</a></b>.
            </p>
            <div className="skills-container">
              <div className="skills-column">
                <li>HTML5/CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </div>
              <div className="skills-column">
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Angular</li>
              </div>
              <div className="skills-column">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </div>
              <div className="skills-column">
                <li>Java</li>
                <li>Docker</li>
                <li>Git</li>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
