import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/Platforms/RelatedServices"
import Footer from "../../components/_App/Footer"

import banner from "../../images/api-enablement.png"
import CarbonMarket from "../../components/Platforms/CarbonMarket"

const CarbonMarketPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Carbon Market"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Carbon Market"
        bannerImage={banner}
      />

      <CarbonMarket />

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
export const Head = () => <Seo title="Carbon Market" />

export default CarbonMarketPage
