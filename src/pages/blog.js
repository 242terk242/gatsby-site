import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Blog() {
  return <Layout>
   <h1>blog</h1>
    <p>Simple nav set up between pages</p>
    <br></br>
    <h2>
    <a href="https://www.youtube.com/watch?reload=9&v=p8G7mR_VJ3U" target="_self">Motivation</a>
    </h2>
  </Layout>
 
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
  `