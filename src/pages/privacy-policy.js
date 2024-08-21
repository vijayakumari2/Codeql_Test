import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Privacy Policy"
      />

      <section className="privacy-policy-area ptb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <p>
                  Thank you for visiting AppNetWise ("we", "us", "our"). This
                  Privacy Policy describes how we collect, use, and disclose
                  information about you through our website and services.
                </p>

                <h3>Information We Collect</h3>
                <p>
                  <b>Personal Information</b> : We may collect personal
                  information such as your name, email address, phone number,
                  and postal address when you voluntarily provide it to us.
                </p>
                <p>
                  <b>Usage Data</b> : We may automatically collect certain
                  information about your device and how you interact with our
                  website, such as your IP address, browser type, and pages
                  visited.
                </p>
                <h3>How We Use Your Information</h3>
                <p>
                  We may use the information we collect for various purposes,
                  including to:
                </p>
                <ul>
                  <li>Provide and maintain our services</li>
                  <li>Improve our website and services</li>
                  <li>
                    Communicate with you, including responding to inquiries and
                    providing customer support
                  </li>
                  <li>
                    Send you promotional emails and updates, where permitted by
                    law
                  </li>
                </ul>
                <h3>Security</h3>
                <p>
                  We take reasonable measures to protect your information from
                  unauthorized access and use, but no security measures are 100%
                  secure.
                </p>
                <h3>Your Choices</h3>
                <p>
                  You may choose not to provide certain information, although
                  this may limit your ability to access certain features of our
                  website.
                </p>

                <h3>Changes to This Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
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
export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage
