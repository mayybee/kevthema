import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Img from 'gatsby-image';

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
      <div className="grid gap-8 md:grid-cols-2 grid-cols-1" style={{
                  marginBottom: rhythm(1),
                }}>
              <header>
              <h3 style={{ marginBottom: rhythm(1/2),}} className="text-3xl">
                  {post.frontmatter.title}
              </h3>
              <p className="mb-0">{post.frontmatter.role}</p>
              <p className="opacity-50 mb-0">{post.frontmatter.years}</p>
              </header>
              <div className="">
                <p style={{
                    marginBottom: rhythm(1),
                  }}
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.intro || post.excerpt,
                  }}
                />
              </div>
            </div>
            <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />

      <div className="grid grid-cols-4 gap-8"
          style={{
              marginTop: rhythm(2),
            }}>
            
        <div className="col-span-2">
          <div className="grid grid-cols-2">
            
            <div className="col-span-1" style={
              {height: rhythm(6)}
            }>             
            <p className="text-xs font-sans opacity-50 mb-0">Team</p> 
              {post.frontmatter.team.map(teammate => {
                return(
                  <p style={{...scale(-1 / 5),
                    }} className="font-sans mb-0">
                    {teammate}
                  </p>
                  )
                })}
            </div>
            <div className="col-span-1" style={
              {height: rhythm(6)}
            }>
              <p className="text-xs font-sans opacity-50 mb-0">Roles</p>
              {post.frontmatter.worktype.map(type => {
                return(
                  <p style={{...scale(-1 / 5),
                    }} className="font-sans mb-0">
                    {type}
                  </p>
                  )
                })}
            </div>
            <div className="col-span-1" style={
              {height: rhythm(6)}
            }>
              <p className="text-xs font-sans opacity-50 mb-0">Company Size</p>
              
                  <p style={{...scale(-1 / 5),
                    }} className="font-sans mb-0">
                    {post.frontmatter.companysize}
                  </p>
                  
            </div>
          
        </div>
          <article className="">
          
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>

            </footer>
          </article>
        </div>
      </div>
      <nav>
        <ul
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
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
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
        intro
        role
        years
        team
        worktype
        companysize
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1323, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
