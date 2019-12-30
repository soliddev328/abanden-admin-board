import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import '../styles/index.css'
import landingStyles from '../styles/landing.module.css'
import portrait from '../images/me.png'

const IndexPage = () => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Morgan Richardson - Software Developer" />
          <meta name="description" content="Morgan is a software developer and designer based in Chicago, IL and creates content on Instagram at @morgan.codes. When Morgan's not coding, she's exploring the city and exploring new technologies." />
      </Helmet>
      <Layout>
        <div className="index-container">
          <h1 className={landingStyles.hello}>Hi, I'm Morgan Richardson.</h1>
          <h2 className={landingStyles.info}>I'm currently a software developer at Oranj in Chicago. When I'm not coding, I'm creating content, exploring the city, and discovering new technologies.</h2>
          <div className={landingStyles.surroundingDiv}>
            <img className={landingStyles.me} src={portrait} alt="Morgan"></img>
          </div>
        </div>
        <div className={landingStyles.contactInfo}>
          <a href="https://www.linkedin.com/in/morganrmarie"><FontAwesomeIcon icon = { faLinkedin } className = { landingStyles.socialIcons } /></a>
          <a href="https://www.github.com/morganrmarie"><FontAwesomeIcon icon = { faGithub } className = { landingStyles.socialIcons } /></a>
          <a href="https://www.instagram.com/morgan.codes"><FontAwesomeIcon icon = { faInstagram } className = { landingStyles.socialIcons } /></a>
          <a href="https://www.twitter.com/morgancodes_"><FontAwesomeIcon icon = { faTwitter } className = { landingStyles.socialIcons } /></a>
          <a href="mailto:hello@morgancodes.co?subject=Morgan.Codes Inquiry"><FontAwesomeIcon icon = { faEnvelopeSquare } className = { landingStyles.socialIcons } /></a>
        </div>
        <p className={landingStyles.joinSlack}><a className={landingStyles.joinSlackLink} href="https://join.slack.com/t/social-coders/shared_invite/enQtODc1NDM3NTYyNjU4LWU2MzJmOGE0Y2U2NDgyMTc4ZTQxYzJlNjM4MmJiZWU3Zjk1NmZiZTYyNTY1NTQxYTk3ZmEyNTI0YTVjNDRkNmU">join the Social Coders slack group</a></p>
      </Layout>
  </div>
  )
}

export default IndexPage
