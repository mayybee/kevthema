import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import '../global.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import moment from 'moment'
import portrait from "../../content/assets/kevin.jpg"

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

const About = ({ data, location }: PageProps<Data>) => {
  
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <h3 style={{
                  marginBottom: rhythm(4),
                }}
                className="text-3xl mb-2">
                Hi!
              </h3>
      <SEO title="About" />
      <div className="grid md:grid-cols-2 gap-8">
     
          <div className="">
          <img src={portrait} alt="it'sa me" />
          </div>
          <div className="">

I'm Kevin, a product designer living in Brooklyn. 

<br/><br/>Previously, I was the Lead Product Designer at NYC startup Canary. I've done product design and marketing consulting through my studio practice for a number of startups, including Kangaroo, Corcus, and EmberLabs.

<br/><br/>
<p className=" ">I believe in:</p>

<p className="font-bold mb-0">Prioritizing realistic impact</p>
<p >It boggles my mind how much time designers & engineers will spend on blue-sky features that are never used, but not take the 10 minutes needed to make simple optimizations that can increase conversions by 3~15%.</p>

<p className="font-bold mb-0">Focusing on the emotion transferred</p>
<p>What are the emotional causes and implications of users coming to your product? Easy example: the <a className="text-indigo-500 cursor-pointer" href="https://canary.is/how-it-works">Canary</a> product isn't really about the fancy hardware at all: it's about peace of mind. </p>

<p className="font-bold mb-0">Starting from first principles</p>
<p>Product decisions should be informed by a chain of logic, not fluffy data. We won't get it perfect the first time - that's where incremental improvement comes in.</p>

          </div>


      </div>

      
    </Layout>
  )
}

export default About


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
