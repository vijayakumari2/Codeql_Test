import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/Platforms/RelatedServices"
import Footer from "../../components/_App/Footer"
import GreenIT from "../../components/Platforms/GreenIT"
import banner from "../../images/consulting.png"

const GreenITPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Green IT"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Green IT"
        bannerImage={banner}
      />

      <GreenIT />

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="GreenIT" />

export default GreenITPage
