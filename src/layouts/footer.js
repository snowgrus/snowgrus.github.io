import React from 'react'
import get from 'lodash/get'
import assign from 'lodash/assign'
import Link from 'gatsby-link'
import Bio from '../components/Bio'

function Footer({ title, style }) {
  return (
    <div className="rw-footer" style={style}>
      <Bio blog="https://snowgrus.github.io/">
        <p><a href="https://github.com/snowgrus/">Github</a></p>
      </Bio>
    </div>
  )
}

export default Footer
