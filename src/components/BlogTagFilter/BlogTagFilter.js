import React from 'react'
import get from 'lodash/get'
import assign from 'lodash/assign'
import Link from 'gatsby-link'

import ArticlePreview from '../ArticlePreview'

function BlogTagFilter({ posts, tag }) {
  return (
    <div className="rw-blog-list">
      {posts.map(post => {
        const tags = get(post, 'node.frontmatter.tags')
        let isShowTagPost = tags.indexOf(tag) !== -1;

        if (post.node.path !== '/404/') {
          
          if (process.env.NODE_ENV === 'production') {
            // 生成环境不发布 草稿状态下的 文章
            if (get(post, 'node.frontmatter.status') !== 'draft' && isShowTagPost) {
              return <ArticlePreview post={post} key={get(post, 'node.frontmatter.path')} />
            } else {
              return null;
            }
          } else {
            return isShowTagPost ? <ArticlePreview post={post} key={get(post, 'node.frontmatter.path')} /> : null
          }
        }
      })}
    </div>
  )
}

export default BlogTagFilter
