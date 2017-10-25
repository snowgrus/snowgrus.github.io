import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import get from 'lodash/get'

import Footer from './footer'
import Header from '../components/Header'
import style from '../shared/styles'
import Bio from '../components/Bio'

const containerStyle = {
  maxWidth: '640px',
  padding: `1em .75em`,
  margin: '0 auto',
};


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteAuthor = get(this, 'props.data.site.siteMetadata.author')
    let rootPath = `/`
    let isHome = false;
    let headerChildren

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    isHome = location.pathname === rootPath;

    if (isHome) {
      headerChildren = (
        <div className="rw-header-body" style={{marginBottom: '36px'}}>
          <h1 key="homeTitle" >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {siteTitle}
            </Link>
          </h1>
          <Bio key="homeBio" name={siteAuthor} textOnly />
        </div>
      )
    } else {
      // headerChildren = (
      //   <h2
      //     style={{
      //       fontFamily: 'Montserrat, sans-serif',
      //       marginTop: 0,
      //     }}
      //   >
      //     <Link
      //       style={{
      //         boxShadow: 'none',
      //         textDecoration: 'none',
      //         color: 'inherit',
      //       }}
      //       to={'/'}
      //     >
      //       {siteTitle}
      //     </Link>
      //   </h2>
      // )
      headerChildren = null;      
    }
    return (
      <div>
        <Header title={siteTitle}>
          <div style={{maxWidth: '640px', margin: '0 auto'}}>
            {headerChildren}
          </div>
        </Header>
        <div style={containerStyle}>
          {children()}
        </div>
        <hr style={{ maxWidth: '640px', margin: '0 auto' }} />
        <Footer title={siteTitle} style={containerStyle} />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
query IndexLayoutQuery {
  site {
    siteMetadata {
      title
      author
    }
  }
}
`;
