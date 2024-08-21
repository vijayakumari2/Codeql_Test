import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

import banner from "../../images/ai-ml.png"
import AIAndML from "../../components/ServiceDetails/AIAndML"

const AIAndMLPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={
          <>
            Artificial Intelligence
            <br />& Machine Learning
          </>
        }
        homePageText="Home"
        homePageUrl="/"
        activePageText="Artificial Intelligence
& Machine Learning"
        bannerImage={banner}
      />

      <AIAndML />

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
export const Head = () => <Seo title="AI & ML" />

export default AIAndMLPage
