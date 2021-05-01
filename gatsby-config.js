require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "hanaa",
    description: `Hey there. Click this link to view my online portfolio.`,
    author: `@khalill`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ad788e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Abril Fatface`,
            },
            {
              family: `Playfair Display`,
              variants: [
                `0,400`,
                `0,500`,
                `0,600`,
                `0,700`,
                `0,800`,
                `0,900`,
                `1,400`,
                `1,500`,
                `1,600`,
                `1,700`,
                `1,800`,
                `1,900`,
              ],
            },
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
