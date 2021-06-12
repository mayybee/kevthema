const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const workPost = path.resolve(`./src/templates/work-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                posttype
              }
              fields {
                slug
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                posttype
  
                title
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                posttype
            
                title
              }
            }
          }
          
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({node, previous, next}) => {
    
    if (node.frontmatter.posttype === 'work') {
      createPage({
        path: node.fields.slug,
        component: workPost,
        context: {
          slug: node.fields.slug,
          previous,
          next,
        },
      })
    }
    if (node.frontmatter.posttype === 'blog') {
      createPage({
        path: node.fields.slug,
        component: blogPost,
        context: {
          slug: node.fields.slug,
          previous,
          next,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
