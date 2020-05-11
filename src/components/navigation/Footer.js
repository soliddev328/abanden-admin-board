import React from 'react';
import SocialIcons from '../social/SocialIcons/SocialIcons';
import * as LINKS from '../../constants/links';

const footerBreak = {
	height: '2px',
	margin: '0px 30px 100px 30px',
	backgroundColor: 'black',
};

const ownershipText = {
	paddingTop: '20px',
	fontSize: '14px',
	float: 'left',
};

const contactIcons = {
	paddingTop: '20px',
	marginRight: '-10px',
	float: 'right',
};

const Footer = () => {
	return (
		<div style={footerBreak}>
			<p style={ownershipText}>
				<a href={LINKS.INSTAGRAM_PROFILE}>@morgan.codes</a>
			</p>
			<div style={contactIcons}>
				<SocialIcons />
			</div>
		</div>
	);
};
export default Footer;
