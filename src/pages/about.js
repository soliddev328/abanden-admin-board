import React from 'react'
import Layout from '../components/layout'
import '../styles/about.css'
import armsImage from '../images/arms.png'

const About = () => {
  return (
    <div>
      <Layout>
        <div className="left">
          <img src={armsImage} className="arms"></img>
        </div>
        <div className="right">
          <b>Hi again,</b> Morgan here. 💭 Thanks for checking out my website! I created it using React, Gatsby, Netlify,
          and Contentful. You can checkout the repository here.
          <br></br><br></br>
          So, who am I? I'm a 20 year old software engineering student with dreams of heading a start-up.
          I'm highly ambitious and like to set goals for myself.
          <br></br><br></br>
          What am I doing now? I'm currently studying Software Engineering at Loyola University Chicago.
          I'll be graduating in May of 2020, which is a year early. Cheers to getting sh*t done! At Loyola,
          I serve as the President of the Computer Science Student Advisory Council. I guide a group
          of 12 students to improve the CS department from within. We also have fun, trust me. Also, I
          tutor other undergraduates for the department. I work as a web developer for the department as well,
          updating and maintaining various web pages. I'm also the front-end lead for Software Systems
          Laboratory, which is a research group that aims to incorporate STEAHM.
          <br></br><br></br>
          I'm currently a Software Engineering intern at Motorola Solutions here in Chicago. More on that will
          come in a blog post.
          <br></br><br></br>
          So yeah, I guess you could say I do a lot. But I like to stay busy. In January of this year I started
          a tech blog, @morgan.codes. I've been documenting my journey as a developer on Instagram and in
          short, the journey has been nothing but amazing. I've met amazing developers and have made
          lifelong friends in the process.
          <br></br><br></br>
          Outside of doing techy things, I like to listen to podcasts while walking around the city, learn
          about true crime, and take extremely mediocre pictures of my dog on my iPhone.
          <br></br><br></br>
          All in all, I'm genuinely fascinated by technology. I think this is why I revolve my life around it.
          I would someday like to inspire a lot of people to pursue careers in technology. Technology
          is the future, and it is very powerful. And as you know, with great power comes great responsibility.
          <br></br><br></br>
          Let's make the world a better place with technology.&nbsp;&nbsp;🧠
        </div>
      </Layout>
    </div>
  )
}

export default About
