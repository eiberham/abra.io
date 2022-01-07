/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Abraham - Blog`,
    author: `Abraham`,
    description: 'Part of my journey as a developer captured in words'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153405661-1",
      },
    },{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abraham`,
        short_name: `Abraham`,
        description: `Hi i'm abraham i'm a software engineer who loves building stuff`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/icon.png`,
        lang: `en`,
        legacy: false,
        include_favicon: false,
        cache_busting_mode: `none`,
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        importWorkboxFrom: `cdn`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
  ],
}
