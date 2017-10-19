import React, { Component } from 'react';
import get from 'lodash/get'

class AboutPage extends Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    console.log('About Page = ', this.props)
    return ( 
      <div className="about-container" style={{ marginTop: '2rem'}}>
        <p>About me.</p>
      </div>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
query AboutQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        frontmatter {
          path
          date(formatString: "DD MMMM, YYYY")
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`;