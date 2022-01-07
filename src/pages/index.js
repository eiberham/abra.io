import React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'

import { Link, useStaticQuery, graphql } from 'gatsby'

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
            <div>Hello world</div>
            {posts && posts.map(post => (
                <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
            ))}
        </Layout >
    )
};


