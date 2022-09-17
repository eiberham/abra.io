import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from '../components/seo'

import "./styles.scss"

/**
 * Gets all posts by year
 * @param {array} posts - The array of posts
 * @returns {object} - Posts by year
 */
function getPostsByYear(posts) {
  if (!Array.isArray(posts)) return null
  return posts.reduce((acc, value) => ({
    ...acc,
    [new Date(value.node.frontmatter.date).getFullYear()]: [
      ...acc[new Date(value.node.frontmatter.date).getFullYear()] || [],
      ...acc[value.node.frontmatter.date] || [],
      ...[value.node.frontmatter]
    ]
  }), {})
}

/**
 * Gets all posts by tag
 * @param {*} posts - The array of posts
 * @returns {array} - The array of posts filtered by tag
 */
function getPostsByTag(posts) {
  if (!Array.isArray(posts)) return null
  return (tag) => posts.filter( post => post.node.frontmatter.tags.includes(tag))
}

export default () => {
  const [articles, setArticles] = useState({})
  const tag = new URLSearchParams(window.location.search).get('tag')
  const { allMarkdownRemark: { edges: posts }} = useStaticQuery(
      graphql`
      {
          allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: {
                  frontmatter: {
                    status: { eq: "published" },
                  }
              }
          ) {
              edges {
                  node {
                      frontmatter {
                          slug
                          title
                          description
                          date(formatString: "MMM DD, YYYY")
                          tags
                          status
                      }
                  }
              }
          }
      }
  `)

  useEffect(() => {
      // TODO: use a compose function here
      const entries = tag ? getPostsByYear(getPostsByTag(posts)(tag)) : getPostsByYear(posts)
      setArticles(entries)
    }, [posts, tag])

    return (
        < Layout >
            <Seo title="Home" />
            <div className="body">
              {articles && Object.entries(articles).map(([key, posts]) => (
                  <div key={key}>
                    <h4 className="body__title">
                      <span>{key}</span>
                    </h4>
                    <ul className="posts">
                    {posts && posts.map(post => {
                        const day = new Date(post.date).toLocaleString('en-US', { day: 'numeric' })
                        const month = new Date(post.date).toLocaleString('en-US', { month: 'long' })
                        return (
                          <li className="post" key={post.slug}>
                            <Link to={post.slug} className="post__link">
                                <div className="post__main">
                                  <span className="post__title">{post.title}</span>
                                  <span className="post__date">{post.date.toUpperCase()}</span>
                                </div>
                                <span className="post__description">{post.description}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
            </div>
        </Layout >
    )
};


