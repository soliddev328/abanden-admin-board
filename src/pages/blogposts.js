import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";


const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
            <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/blogpost/${post.slug}`}>{post.welcomeToMyBlog}</Link>
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
          welcomeToMyBlog
          slug
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
