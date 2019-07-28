import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.welcomeToMyBlog
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <h1></h1>
      </Layout>
    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost( slug: { eq: $slug }) {
      welcomeToMyBlog
      subtitle
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
