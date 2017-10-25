import React from 'react'

import './MarkdownBody.scss'

function Markdown({ html }) {

  return (
    <div className="rw-markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Markdown
