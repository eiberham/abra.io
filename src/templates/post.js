import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { FaRegClock } from 'react-icons/fa';

import Layout from "../components/layout";
import Seo from "../components/seo"
import Tags from "../components/tags"

import './styles.scss';

export default function Template(props) {
  const { data } = props
  const { markdownRemark: post } = data;

  useEffect(() => deckDeckGoHighlightElement(window))

  return (
    <Layout>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description} />
      <div className="head">
        <h1>{post.frontmatter.title}</h1>
        <h2><FaRegClock /> {post.frontmatter.duration}</h2>
        <Tags tags={post.frontmatter.tags} />
      </div>
      <div className="body">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        duration
        tags
      }
    }
  }
`