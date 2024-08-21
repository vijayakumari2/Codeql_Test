import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const TermsOfServicePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Terms & Conditions"
      />

      <section className="terms-of-service-area ptb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="terms-of-service-content">
                <h3>Terms & Conditions</h3>
                <p>
                  These Terms & Conditions ("Terms") govern your use of our
                  website and services provided by AppNetWise. By accessing or
                  using our website, you agree to be bound by these Terms.
                </p>

                <h3>Use of Our Website</h3>
                <p>
                  You agree to use our website only for lawful purposes and in
                  accordance with these Terms. You may not use our website:
                </p>
                <ul>
                  <li>
                    In any way that violates applicable laws or regulations
                  </li>
                  <li>To transmit unsolicited commercial communications</li>
                  <li>
                    To engage in any activity that could harm our website or
                    interfere with its operation
                  </li>
                </ul>
                <h3>Intellectual Property</h3>
                <p>
                  The content on our website, including text, graphics, logos,
                  and images, is owned by us or our licensors and is protected
                  by copyright and other intellectual property laws.
                </p>
                <h3>Limitation of Liability</h3>
                <p>
                  We are not liable for any direct, indirect, incidental,
                  special, or consequential damages arising out of or in any way
                  connected with your use of our website or services. We may
                  update these Terms from time to time. We will notify you of
                  any changes by posting the new Terms on our website.
                </p>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about these Terms, please contact us
                  at{" "}
                  <a href="mailto:connect@appnetwise.com">
                    connect@appnetwise.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Terms Of Service" />

export default TermsOfServicePage
