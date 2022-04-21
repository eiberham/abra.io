import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from '../components/seo'

import "./styles.scss"



export default () => {
    const { allMarkdownRemark: { edges: posts }} = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                            title
                            description
                        }
                    }
                }
            }
        }
    `)

    return (
        < Layout >
            <Seo title="Home" />
            <div className="header">
                <h1>Abraham's Blog</h1>
                <h3>A space for sharing thoughts and findings</h3>
            </div>
            <div className="body">
                <h4>Latest Posts</h4>
                <ul className="posts">
                    {posts && posts.map(post => (
                        <li>
                            <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
                            <span>{post.node.frontmatter.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout >
    )
};


