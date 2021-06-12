import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="grid md:grid-cols-4 gap-8"
          style={{
              marginTop: rhythm(4),
            }}>
        <div className="col-span-1">

          <p className="text-sm opacity-50 mb-0">Posted</p>
          <p
            style={{
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>

        </div>
        <div className="col-span-3">
          <article className="max-w-xl">
            <header>
              <h1
              className="text-2xl"
              style={{
                marginBottom: rhythm(1),
              }}
              >
              {post.frontmatter.title}
              </h1>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>

            </footer>
            <nav>
              {/* <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={`/blog/${next.fields.slug}`} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul> */}
            </nav>
          </article>
        </div>
      </div>
      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
