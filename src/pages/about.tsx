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

<p className="font-bold mb-0">Prioritizing impact</p>
<p >It boggles my mind how much time designers & engineers are willing to spend on blue-sky features that end up unused, but not take the 10 minutes to make tweaks that guarantee +10% conversions.</p>

<p className="font-bold mb-0">Starting from first principles</p>
<p>Product decisions should be informed by a chain of logic, not fluffy data.</p>

<p className="font-bold mb-0">Incermental Improvement</p>
<p>We won't get it perfect the first time, or ever. But well-planned rapid iteration will help us get pretty close.</p>


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
