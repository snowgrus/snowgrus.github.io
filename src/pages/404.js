import React, { Component } from 'react';
import get from 'lodash/get'

class Page404 extends Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return ( 
      <div className="about-container" style={{ marginTop: '2rem'}}>
        <p>Not Found</p>
      </div>
    );
  }
}

export default Page404;