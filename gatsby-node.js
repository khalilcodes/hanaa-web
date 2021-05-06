exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      works: allContentfulWorks {
        nodes {
          slug
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const works = result.data.works.nodes
  const workPageTemplate = require.resolve('./src/templates/work-page-template.js')

  works.forEach(({ slug }) => {
      createPage({
        path: `/selected-works/${slug}`,
        component: workPageTemplate,
        context: {
            slug: slug
        }
      })
  });
}