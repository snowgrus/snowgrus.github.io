import React from 'react'
import get from 'lodash/get'
import assign from 'lodash/assign'
import Link from 'gatsby-link'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import './ArticlePreview.scss'

function getArtcleTypeOption(post) {
  let ret = {
    label: '原',
    className: 'rw-ArticlePreview',
    type: 'original'
  };

  if (get(post, 'node.frontmatter.type') === 'translation') {
    assign(ret, {
      label: '译',
      className: 'rw-ArticlePreview rw-ArticlePreview--translation',
      type: 'translation'
    })
  } else if (get(post, 'node.frontmatter.type') === 'forward') {
    assign(ret, {
      label: '转',
      className: 'rw-ArticlePreview rw-ArticlePreview--forward',
      type: 'forward'
    })
  }

  return ret;
}

function ArticlePreview({ post }) {
  const title = get(post, 'node.frontmatter.title') || post.node.path
  const tags = get(post, 'node.frontmatter.tags')
  const date = get(post, 'node.frontmatter.date')
  const originUrl = get(post, 'node.frontmatter.originUrl')
  const originTitle = get(post, 'node.frontmatter.originTitle')
  const originAutor = get(post, 'node.frontmatter.originAutor')
  const option = getArtcleTypeOption(post);

  return (
    <div className={option.className}>
      <h2 className="rw-ArticlePreview-title">
        <em className="rw-ArticlePreview-label">{option.label}</em>
        <Link
          style={{ boxShadow: 'none' }}
          to={post.node.frontmatter.path}
        >
          {post.node.frontmatter.title}
        </Link>
      </h2>
      <div className="rw-ArticlePreview-subtitle">
        <small>
          {
            tags.split(',').map((tag, i) => {
              const appendStr = i === 0 ? '' : ', '
              return [<i>{appendStr}</i>, (
                <Link
                  to={`/tag/${tag}`}
                >
                  {tag}
                </Link>
              )];
            })
          }
          <span>{date}</span>
        </small>
      </div>
      <p className="rw-ArticlePreview-excerpt" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
    </div>
  )
}

export default ArticlePreview
