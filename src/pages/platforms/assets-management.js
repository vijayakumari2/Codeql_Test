import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/Platforms/RelatedServices"
import Footer from "../../components/_App/Footer"

import banner from "../../images/ai-ml.png"
import AssetManagement from "../../components/Platforms/AssetManagement"

const AssetsManagementPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Assets Management"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Assets Management"
        bannerImage={banner}
      />

      <AssetManagement />

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
export const Head = () => <Seo title="Asset Management" />

export default AssetsManagementPage
