import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { FaRegClock } from 'react-icons/fa';

import Layout from "../components/layout";
import Seo from "../components/seo"
import Tags from "../components/tags"
import Comments from "../components/comments"

import { getEstimatedReadingTime } from '../utils'

import './styles.scss';

export default function Template(props) {
  const { data } = props
  const { markdownRemark: post } = data;
  const minutes = getEstimatedReadingTime(post.html)

  useEffect(() => {
    deckDeckGoHighlightElement(window)
    return () => {}
  })

  return (
    <React.Fragment>
      <Layout>
        <Seo title={post.frontmatter.title} description={post.frontmatter.description} />
        <div className="head">
          <h1>{post.frontmatter.title}</h1>
          <h2 className="time"><FaRegClock />&nbsp;{minutes} minutes</h2>
          <Tags tags={post.frontmatter.tags} />
        </div>
        <div className="body">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Comments />
      </Layout>
    </React.Fragment>
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
        status
      }
    }
  }
`