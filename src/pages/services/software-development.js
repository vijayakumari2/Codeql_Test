import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

import banner from "../../images/software-developement.png"
import SoftwareDevelopment from "../../components/ServiceDetails/SoftwareDevelopment"

const SoftwareDevelopmentPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Software Development"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Software Development"
        bannerImage={banner}
      />

      <SoftwareDevelopment />

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
export const Head = () => <Seo title="Software Development" />

export default SoftwareDevelopmentPage
