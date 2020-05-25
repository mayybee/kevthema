import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import picture from "../../content/assets/pick.png"
import { rhythm } from "../utils/typography"


const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="grid-cols-3">
        <div className="max-w-sm">
          <h1 className="text-2xl" style={{
          marginBottom: rhythm(1) }}>What you're looking for may have been misplaced in Long-Term Memory.</h1>
          <p style={{
          marginBottom: rhythm(1) }}><Link
          className="hover:text-indigo-500"
          style={{
            boxShadow: `none`,
          }}
          to={`/`}
        >Go back Home →</Link></p>
          <p style={{ marginBottom: rhythm(1) }}>It's dangerous to go alone! Take this</p>
          <img src={picture} className="max-w-xs" alt="Picture of of pickaxe" />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
