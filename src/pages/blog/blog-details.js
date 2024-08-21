import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import BlogDetailsContent from "../../components/BlogContent/BlogDetailsContent"
import Footer from "../../components/_App/Footer"
import { graphql } from "gatsby"

const BlogDetailsPage = ({ data }) => {
  if (!data || !data.bloggerPost) {
    return <div>Error: Blog post data is not available.</div>
  }

  const post = data.bloggerPost

  return (
    <Layout>
      <Seo title={post.title} />
      <Navbar />
      <PageBanner
        pageTitle="Blog Details"
        homePageText="Blog"
        homePageUrl="/blog"
        activePageText="Blog Details"
      />
      <BlogDetailsContent post={post} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    bloggerPost(slug: { eq: $slug }) {
      slug
      id
      title
      content
      published
      author {
        displayName
      }
    }
  }
`

export default BlogDetailsPage
