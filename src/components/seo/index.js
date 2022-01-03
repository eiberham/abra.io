import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ title, description, meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            author,
            description,
            title
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: 'en' }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ].concat(meta)}
    />
  )
}