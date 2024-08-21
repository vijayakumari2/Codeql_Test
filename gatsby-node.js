/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create a static page example
  createPage({
    path: "/using-dsg",
    component: path.resolve("./src/templates/using-dsg.js"),
    context: {},
  })

  // Dynamically create blog post pages
  const result = await graphql(`
    {
      allBloggerPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allBloggerPost.edges

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve("./src/pages/blog/blog-details.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
