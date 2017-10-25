import React from 'react'
import PropTypes from 'prop-types'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './avatar_wings.jpg'

class Bio extends React.Component {
  render() {
    const { name, slogan, textOnly, children, blog } = this.props;
    return (
      <div>
        {
          textOnly ? null : (
            <img
              src={profilePic}
              alt={`Kyle Mathews`}
              style={{
                float: 'left',
                marginBottom: 0,
                borderRadius: '40px',
                width: '50px',
                height: '50px',
                marginRight: '16px',
              }}
            />
          )
        }
        <a href={blog}><strong>{name}</strong></a> 科技世界的快乐旅行者，始终相信 “{slogan}”
        {children}
      </div>
    )
  }
}

Bio.propTypes = {
  name: PropTypes.string,
  solgan: PropTypes.string,
  textOnly: PropTypes.bool,
  blog: PropTypes.string,
  github: PropTypes.string,
}
Bio.defaultProps = {
  name: 'Snow Grus',
  slogan: '没有最好，只有更好',
  textOnly: false,
}

export default Bio
