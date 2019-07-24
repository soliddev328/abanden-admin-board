import React from 'react'
import Layout from '../components/layout'
import '../styles/index.css'
import landingStyles from '../styles/landing.module.css'
import portrait from '../images/me.png'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1 className={landingStyles.hello}>HI, I'M MORGAN RICHARDSON.</h1>
        <h2 className={landingStyles.info}>I'M CURRENTLY STUDYING SOFTWARE ENGINEERING IN CHICAGO. WHEN I'M NOT EXPLORING THE CITY, I'M BUILDING, CREATING, AND LEARNING.</h2>
        <div className={landingStyles.surroundingDiv}>
          <img className={landingStyles.me} src={portrait} alt="Morgan"></img>
        </div>
        <div className={landingStyles.sideBar}></div>
      </Layout>
  </div>
  )
}

export default IndexPage
