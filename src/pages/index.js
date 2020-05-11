import React from 'react';
import Layout from '../components/shared/Layout';
import Head from '../components/shared/Head';
import Footer from '../components/navigation/Footer';
import landingStyles from '../styles/landing.module.css';
import LineIllustration from '../images/m_outline.png';
import SocialIcons from '../components/social/SocialIcons/SocialIcons';
import '../styles/index.css';

const IndexPage = () => {
	return (
		<div>
			<Head />
			<Layout>
				<div className={landingStyles.indexContainer}>
					<div className={landingStyles.left}>
						<p className={landingStyles.hello}>
							Hi, I'm Morgan Richardson.
						</p>
						<p className={landingStyles.info}>
							Developer, Influencer, Creator
						</p>
						<SocialIcons />
					</div>
					<div className={landingStyles.right}>
						<img
							className={landingStyles.me}
							src={LineIllustration}
							alt="Morgan"
						></img>
					</div>
				</div>
				<Footer />
			</Layout>
		</div>
	);
};

export default IndexPage;
