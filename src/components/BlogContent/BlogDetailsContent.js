import React from "react"
import { Link } from "gatsby"
import parse from "react-html-parser"

import CopyButton from "../copy-button/CopyButton"

const BlogDetailsContent = ({ post }) => {
  const { slug, published } = post
  const year = new Date(published).getFullYear()
  let month = new Date(published).getMonth() + 1
  month = month < 10 ? `0${month}` : month
  const shareUrl = `https://appnetwise.blogspot.com/${year}/${month}/${slug}.html`

  return (
    <section className="blog-details-area ptb-100">
      <div className="container">
        <div className="row justify-content">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-content">
                <div className="entry-meta pb-40">
                  <ul>
                    <li>
                      <i className="bx bx-user"></i>
                      {post.author.displayName}
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Last Updated</span>
                      {new Date(post?.published).toLocaleDateString()}
                    </li>
                    <li>
                      <i className="bx bx-copy"></i>
                      <CopyButton linkToCopy={shareUrl} />
                    </li>
                  </ul>
                </div>

                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{parse(post?.content)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetailsContent
