import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

import banner from "../../images/api-enablement.png"
import ApiEnablement from "../../components/ServiceDetails/ApiEnablement"

const ApiEnablementPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="API Enablement"
        homePageText="Home"
        homePageUrl="/"
        activePageText="API Enablement"
        bannerImage={banner}
      />

      <ApiEnablement />

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
export const Head = () => <Seo title="API Enablement" />

export default ApiEnablementPage
