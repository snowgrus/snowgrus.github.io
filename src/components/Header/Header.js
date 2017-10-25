import React from 'react'
import Link from 'gatsby-link'

import './Header.scss'
import logoImg from '../Bio/avatar_wings.jpg'

function Header({ title, children }) {

  return (
    <div className="rw-header">
      <div className="rw-header-inner">
        <Link to="/" className="rw-brand"><img src={logoImg} alt={title} title={title} /></Link>
        <a className="rw-menuButton">
          <i className="rw-icon rw-icon-list" />菜单
        </a>
        {/* <nav className="rw-nav">
          <h2>菜单</h2>
          <ul>
            <li>主页</li>
            <li>关于我</li>
          </ul>
        </nav> */}
        {children}
      </div>
    </div>
  )
}

export default Header
