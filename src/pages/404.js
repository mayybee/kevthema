import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bonfire from "../../content/assets/bonfire.jpg"
import { rhythm } from "../utils/typography"


const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="grid-cols-2">
        <div className="col-span-1">
          <p className="" style={{
            fontSize: rhythm(1),
          marginBottom: rhythm(1) }}>What you're looking for has mysteriously vanished</p>
         
          <p style={{ marginBottom: rhythm(1) }}>
          Come rest by thy bonfire. Then off with ye, intrepid adventurer.
          <br/><br/>Don't you dare give up.
          </p>

          <p style={{
              marginBottom: rhythm(1) }}>
            <Link
              className="hovercolor"
              style={{
                boxShadow: `none`,
              }}
              to={`/`}
            >Go Home →</Link>
          </p>
        </div>
        <div className="col-span-1">
          <img src={bonfire} className=""/>
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
