import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from '../components/seo'
import Newsletter from '../components/newsletter'

import "./styles.scss"

export default () => {
    const { allMarkdownRemark: { edges: posts }} = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: {
                    frontmatter: { status: { eq: "published" } }
                }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                            title
                            description
                            date (formatString: "MMM, YYYY")
                            status
                        }
                    }
                }
            }
        }
    `)

    return (
        < Layout >
            <Seo title="Home" />
            {/* <div className="header">
                <h1>Abraham's Blog</h1>
                <h2>A space for sharing thoughts and findings</h2>
            </div> */}
            <div className="body">
                <h4 className="body__title">
                    <span>Latest Posts</span>
                    <a href="/posts">View All</a>
                </h4>
                <ul className="posts">
                    {posts && posts.map(post => (
                        <li className="post" key={post.node.frontmatter.slug}>
                            <Link to={post.node.frontmatter.slug} className="post__link">
                                <div className="post__main">
                                    <span className="post__title">{post.node.frontmatter.title}</span>
                                    <span className="post__date">{post.node.frontmatter.date.toUpperCase()}</span>
                                </div>
                                <span className="post__description">{post.node.frontmatter.description}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Newsletter />
            </div>
        </Layout >
    )
};


