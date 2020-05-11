import React from 'react';
import Helmet from 'react-helmet';
// import { Link, graphql } from 'gatsby'

import '../styles/blogpost.css';
import Layout from '../components/shared/Layout';

const BlogPosts = ({ data }) => {
	const blogPosts = data.allContentfulSingleBlogPost.edges;

	const formatDateTime = (dateTime) => {
		let date = new Date(dateTime);
		console.log(date.toString());
		return date.toString();
	};

	return (
		<div id="blog-background">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Blog by @morgan.codes</title>
			</Helmet>
			<Layout>
				<div className="coming-soon-container">
					<p className="coming-soon-text">Blog coming soon...</p>
				</div>
				{/* <h1 className="blog-header"><Link className="blog-link" to="/">M</Link></h1>
        <div className='blogposts'>
          {blogPosts.map(({ node: post }) => (
            <div key={post.id} className="post-container">
              <img className="post-image" src={post.previewImage.file.url}></img>
              <div className="post-body">
                <Link  className="blogpost-title" to={`/blogpost/${post.slug}`}>{post.title}</Link>
                <div className="about-blog">{post.subtitle}</div>
                <div className="date-time">{formatDateTime(post.dateTime)}</div>
              </div>
            </div>
          ))}
          <span className="mgBtm__24" />
        </div> */}
			</Layout>
		</div>
	);
};

export default BlogPosts;

export const query = graphql`
	query BlogPostsPageQuery {
		allContentfulSingleBlogPost(limit: 1000) {
			edges {
				node {
					title
					id
					description
					author
					subtitle
					slug
					dateTime
					previewImage {
						file {
							url
							fileName
							contentType
						}
					}
				}
			}
		}
	}
`;
