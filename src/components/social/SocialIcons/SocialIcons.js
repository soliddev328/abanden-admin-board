import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faFacebook,
	faGithub,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import * as LINKS from '../../../constants/links';
import './SocialIcons.scss';

const SocialIcons = () => {
	return (
		<div>
			<a
				href={LINKS.INSTAGRAM_PROFILE}
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon"
			>
				<FontAwesomeIcon icon={faInstagram} />
			</a>
			<a
				href={LINKS.TWITTER_PROFILE}
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon"
			>
				<FontAwesomeIcon icon={faTwitter} />
			</a>
			<a
				href={LINKS.FACEBOOK_PAGE}
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon"
			>
				<FontAwesomeIcon icon={faFacebook} />
			</a>
			<a
				href={LINKS.LINKEDIN_PROFILE}
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a
				href={LINKS.GITHUB_PROFILE}
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon"
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a
				href="mailto:hello@morgan.codes?subject=Morgan.Codes Inquiry"
				className="social-icon"
			>
				<FontAwesomeIcon icon={faEnvelopeSquare} />
			</a>
		</div>
	);
};

export default SocialIcons;
