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
    [new Date(value.node.frontmatter.date).getFullYear()]: [
      ...acc[value.node.frontmatter.date] || [],
      ...[value.node.frontmatter]
    ]
  }), {})
}

export default () => {
    const [ articles, setArticles ] = useState({})
    const { allMarkdownRemark: { edges: posts }} = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                            title
                            description
                            date(formatString: "MMMM DD, YYYY")
                        }
                    }
                }
            }
        }
    `)

    useEffect(() => {
      const entries = getPostsByYear(posts)
      setArticles(entries)
    }, [posts])

    return (
        < Layout >
            <Seo title="Home" />
            {/* <div className="header">
                <h1>Posts</h1>
                <h2>Articles, snippets, tutorials and more</h2>
            </div> */}
        <div className="body">
          {articles && Object.entries(articles).map(([key, posts]) => (
              <React.Fragment>
                <h4 className="body__title">
                <span>{key}</span>
                </h4>
                <ul className="posts">
                {posts && posts.map(post => {
                    const day = new Date(post.date).toLocaleString('en-US', { day: 'numeric' })
                    const month = new Date(post.date).toLocaleString('en-US', { month: 'long' })
                    return (
                      <li className="post">
                        <Link to={post.slug} className="post__link">
                            <div className="post__main">
                                <span className="post__title">{post.title}</span>
                                <span className="post__date">{`${month}, ${day}`}</span>
                            </div>
                            <span className="post__description">{post.description}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </React.Fragment>
            ))}
            </div>
        </Layout >
    )
};


