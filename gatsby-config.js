/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/humbrd`,
  /* Your site config here */
  // In your gatsby-config.js
  siteMetadata: {
    title: `Hummin'`,
    author: `Peace`
  },
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
      name: `pages`,
    }
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [] // just in case those previously mentioned remark plugins sound cool :)
    }
  },
  {
    resolve: `gatsby-plugin-catch-links`,
    options: {
      // Links are relative to this directory
      excludeRegex: /excluded-link/,
    },
  },
]
}
