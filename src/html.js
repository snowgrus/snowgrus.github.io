import React from "react"

import './shared/styles'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <nav className="rw-nav">
            <a className="rw-nav-close">×</a>
            <h2>菜单</h2>
            <ul>
              <li><a href="/">主页</a></li>
              <li><a href="/about">关于我</a></li>
            </ul>
          </nav>
          <div
            key={`body`}
            id="___gatsby"
            className="rw-main"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="scripts/jquery-1.12.4.min.js"></script>
          <script src="scripts/main.js"></script>
        </body>
      </html>
    )
  }
}
