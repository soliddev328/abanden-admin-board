import React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/navigation/Footer';
import Layout from '../components/shared/Layout';
import '../styles/about.css';

import * as LINKS from '../constants/links';
import SocialIcons from '../components/social/SocialIcons/SocialIcons';

const About = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Morgan.Codes - About</title>
			</Helmet>
			<Layout>
				<div className="about-container">
					<div className="inner-about-container">
						<h2 className="inner-about-header">About Me</h2>
						<p className="inner-about-description about-me">
							Hello, world! I'm Morgan Richardson, also known as{' '}
							<b>
								<a
									href={LINKS.INSTAGRAM_PROFILE}
									className="about-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									@morgan.codes
								</a>
							</b>{' '}
							on Instagram. I'm currently working as a software
							developer at a fintech startup in the heart of
							Chicago. One of my goals as a social media
							influencer has been to connect my followers with
							one-another to form a community of passionate,
							dedicated developers. I recently started{' '}
							<b>
								<a
									href={LINKS.SLACK_INVITE}
									className="about-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Social Coders
								</a>
							</b>
							, which is a community-based Slack workspace for
							tech lovers to network and have discussions.
							Everyone is welcome to join!
						</p>
						<SocialIcons />
					</div>
					<div className="inner-about-container">
						<h2 className="inner-about-header">My Skills</h2>
						<p className="inner-about-description">
							Apart from the courses I've taken in college, I've
							taken a number of online courses the further my
							skills. Some of these online courses I've taken
							include{' '}
							<b>
								<a
									class="course-link"
									href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
									target="_blank"
									rel="noopener noreferrer"
								>
									The React Complete Guide
								</a>
							</b>
							,{' '}
							<b>
								<a
									class="course-link"
									href="https://www.udemy.com/course/the-complete-javascript-course/"
									target="_blank"
									rel="noopener noreferrer"
								>
									The Complete JavaScript Course
								</a>
							</b>
							, and &nbsp;
							<b>
								<a
									className="course-link"
									href="https://www.udemy.com/course/learn-html-css-by-building-3-real-projects/"
									target="_blank"
									rel="noopener noreferrer"
								>
									HTML & CSS for Beginners
								</a>
							</b>
							.
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
				<Footer />
			</Layout>
		</div>
	);
};

export default About;
