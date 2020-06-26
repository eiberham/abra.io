/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        name: `Abra`,
        short_name: `Abra`,
        description: `Hi i'm abraham i'm a software engineer who loves building stuff`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        lang: `en`,
        legacy: false,
        include_favicon: false,
        cache_busting_mode: `none`,
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/*']
         },
         precachePages: [`/`]
      }
    }
  ],
}
