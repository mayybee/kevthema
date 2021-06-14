import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import '../global.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import moment from 'moment'

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let prevYear = 2021
  return (
    <Layout location={location} title={siteTitle} >
      <SEO title="Blog" />
  
      <div className="grid grid-cols-8 	">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        let year = Number(moment(node.frontmatter.date).format('YYYY'))
        let print = null
        if (prevYear != year){
          print = year
          prevYear --
        }
        return (
          <>
          <div className="col-span-8 mb-4 sm:col-span-1 sm:mb-0">
            {print}
          </div>
          <div className="col-span-8 sm:col-span-7">
          <article className="max-w-xl" key={node.fields.slug} style={{ marginBottom: rhythm(2),}}>
          <Link className="blog-section" style={{ boxShadow: `none` }} to={node.fields.slug}>
            <header>
              <p className="blog-section-title" style={{ marginBottom: rhythm(0),}}>
                  {title}
              </p>
            </header>
            <section>
              <p className="opacity-50 blog-section-description"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            </Link>
          </article>
        </div>
        
        </>
        )


      })}
      </div>
      
    </Layout>
  )
}

export default BlogIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
