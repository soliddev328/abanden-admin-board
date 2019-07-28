import React from 'react'
import { Link, graphql } from 'gatsby'
import '../styles/blogpost.css'
import Layout from '../components/layout'


const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <div className='blogposts'>
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link  className="blogpost-link" to={`/blogpost/${post.slug}`}>{post.welcomeToMyBlog}</Link>
            <div className="about-blog">{post.subtitle}</div>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
};

export default BlogPosts;

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          subtitle
          welcomeToMyBlog
          slug
          time
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
