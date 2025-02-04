import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"
import ConsultingAndAdvisory from "../../components/ServiceDetails/ConsultingAndAdvisory"
import banner from "../../images/consulting.png"

const ConsultingAdvisoryPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Consulting & Advisory"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Consulting & Advisory"
        bannerImage={banner}
      />

      <ConsultingAndAdvisory />

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
export const Head = () => <Seo title="Consulting & Advisory" />

export default ConsultingAdvisoryPage
