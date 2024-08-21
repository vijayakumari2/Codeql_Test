import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

import banner from "../../images/devops.png"

import DevOps from "../../components/ServiceDetails/DevOps"

const DevOpsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="DevOps Practices"
        homePageText="Home"
        homePageUrl="/"
        activePageText="DevOps Practices"
        bannerImage={banner}
      />

      <DevOps />

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
export const Head = () => <Seo title="DevOps" />

export default DevOpsPage
