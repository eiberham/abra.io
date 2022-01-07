import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import Seo from "../components/seo"

export default function Template(props) {
  const { data } = props
    const { markdownRemark: post } = data;

    return (
      <Layout>
          <Seo title={post.frontmatter.title} description={post.frontmatter.description} />
          <div>
              <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html}} />
          </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`