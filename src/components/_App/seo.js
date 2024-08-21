/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

function Seo({ description, title, children, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const keywords = site.siteMetadata?.keywords
  const metaImage = image || site.siteMetadata?.image
  const imageUrl = `${site.siteMetadata?.siteUrl}${metaImage}`
  const siteUrl = site.siteMetadata?.siteUrl

  return (
    <>
      <Helmet>
        <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:title"
          content={"Digital Transformation Partner" || title}
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:creator"
          content={site.siteMetadata?.author || ``}
        />
        <meta
          name="twitter:title"
          content={"Digital Transformation Partner" || title}
        />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta
          name="google-site-verification"
          content="wMgQ7pbyeackOK5oUpCDXJ02HRDnTfitz7S2-IwJRS4"
        />
        <meta name="keywords" content={keywords} />
        {children}
      </Helmet>
    </>
  )
}

export default Seo
