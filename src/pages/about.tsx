import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import '../global.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import moment from 'moment'
import portrait from "../../content/assets/profile.jpg"

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
      {/* <h3 style={{
                  marginBottom: rhythm(4),
                }}
                className="text-3xl mb-2">
                Hi!
              </h3> */}
      <SEO title="About" />
      <div className="grid md:grid-cols-2 gap-8 mt-3">
     
          <div className="rounded-lg">
          <img src={portrait} alt="it'sa me" className="rounded-lg"/>
          </div>
          <div className="">

My name is Kevin. I live in New York.

<br/><br/>
<p className=" ">The broad idea behind my work is that <b>user success is fractal</b>. For software creators, "making users successful and getting paid for it" is a process that starts by looking at what our users want in their LIVES and how they're trying to GET it. 

Then it's a matter of recursing downwards and downwards and downwards to the tiny software interaction moments.
</p>
<p>
Because we never really do buy products, do we? We buy better versions of ourselves.</p>
<p className=" ">
These days I'm working on <b>Compound UX</b>, a consultancy that accelerates startups. 
</p>
<p className=" ">
I'll say this now and I'll say this forever: it's disgusting how much money SaaS businesses are leaving on the table by not performing the simplest of optimizations.
</p>
<p className=" ">
Routinely neglected areas that should be receiving as much attention than your actual product: every page on your marketing site, your SEO (blog and tools), your onboarding, your email follow-ups.
</p>
<p className=" ">
Any of this seem interesting to you? Drop me a line!<br/>
<b>kevin @ kevthema.com</b></p>




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
