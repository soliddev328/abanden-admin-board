import React from 'react'
import Layout from '../components/layout'
import reachOut from '../images/reach-out.png'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="left">
            <img src= { reachOut } className="arms" alt="pic"></img>
          </div>
          <div className="right">
            <p className="contact-link"><a className="a-contact-link" href="mailto:morganrmarie@gmail.com?subject=morgan.codes inquiry">email</a></p>
            <p className="contact-link"><a className="a-contact-link" href="https://www.github.com/morganrmarie" target="_blank" rel="noopener noreferrer">github</a></p>
            <p className="contact-link"><a className="a-contact-link" href="https://www.linkedin.com/in/morganrmarie" target="_blank" rel="noopener noreferrer">linkedin</a></p>
            <p className="contact-link"><a className="a-contact-link" href="https://www.instagram.com/morgan.codes" target="_blank" rel="noopener noreferrer">instagram</a></p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
