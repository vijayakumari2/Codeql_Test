import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ post }) => {
  return (
    <div className="col-lg-4 col-md-6 mt-40">
      <div className="single-blog-post bg-fffbf5">
        <div className="post-image">
          <Link to={`/blog/${post.slug}`}>
            <img src={post.images[0]?.url} alt="Blog post" />
          </Link>
        </div>
        <div className="post-content">
          <ul className="post-meta d-flex justify-content-between align-items-center">
            <li>
              <li>
                <i className="flaticon-user"></i> {post.author.displayName}
              </li>
            </li>
            <li>
              <i className="flaticon-calendar"></i>{" "}
              {new Date(post.published).toLocaleDateString()}
            </li>
          </ul>
          <h3>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
