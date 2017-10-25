import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BlogTagFilter from '../../components/BlogTagFilter'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <BlogTagFilter posts={posts} tag="javascript" />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query JavascriptTagQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 120)
          frontmatter {
            path
            date(formatString: "YYYY-MM-DD")
          }
          frontmatter {
            title
            type
            tags
            originUrl
            originTitle
            originAutor
            status
          }
        }
      }
    }
  }
`
