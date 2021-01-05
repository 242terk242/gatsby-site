import React from "react"
import { Helmet } from "gatsby-plugin-react-helmet"
import { graphql } from "gatsby"

// import '../css/blog-post.css'; // make it pretty!

export default function Template() {
  /* w/ data
  export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {*/

  // { markdownRemark: post } = data // data.markdownRemark holds your post data
  
  /* return block
<div className="blog-post-container">
    <Helmet title={`Hummin' - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div> 
  */
  return (
     <div></div>
  )
}

/*
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`*/