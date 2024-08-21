/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `AppNetWise`,
    description: `AppNetWise`,
    author: `@AppNetWise`,
    siteUrl: `https://appnetwise.com/`,
    keywords: [
      "Software Development",
      "Green IT",
      "API enablement",
      "Cloud DevOps / DevSecOps ",
      "Cloud Adoption",
      "Kubernetes",
      "GitOps",
      "Software Testing, Automation",
      "API",
    ],
    image: "/icons/icon-72x72.png",
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AppNetWise`,
        short_name: `AppNetWise`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-blogger",
      options: {
        apiKey: process.env.GATSBY_BLOGGER_API_KEY,
        blogId: "5655676382908393141",
        downloadImage: true,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
