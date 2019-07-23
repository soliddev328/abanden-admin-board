import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class BlogPostContentfulTemplate extends React.component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.siteTitle
    
  }
}
