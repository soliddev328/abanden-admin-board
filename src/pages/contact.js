import React from 'react';
import Layout from '../components/shared/Layout';
import reachOut from '../images/reach-out.png';
import '../styles/contact.css';
import * as LINKS from '../constants/links';
import SocialIcons from '../components/social/SocialIcons/SocialIcons';

const Contact = () => {
	return (
		<div>
			<Layout>
				<div className="container">
					<div className="left">
						<img src={reachOut} className="arms" alt="pic"></img>
					</div>
					<div className="contact-right">
						<p className="connect-header">Let's connect!</p>
						<p className="connect-info">
							If you'd like to stay connected, join our&nbsp;
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
							&nbsp;Slack community! I created this workspace for
							anyone in the tech community to have discussions &
							get to know each other. Come hangout!
						</p>
						<SocialIcons />
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Contact;
