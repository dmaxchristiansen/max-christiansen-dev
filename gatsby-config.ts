import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Frontend Showcase`,
    description: `A showcase of frontend React components built in Gatsby`,
    author: `@RealMaxFaze`,
    image: `https://dmc-frontend-showcase.netlify.app/seo/react.png`,
    siteUrl: `https://dmc-frontend-showcase.netlify.app`,
  },
  jsxRuntime: "automatic",
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frontend Showcase`,
        short_name: `Frontend Showcase`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/otter-favioh.png`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "500", "700"],
              strategy: "selfHosted",
            },
            {
              family: "Mr Dafoe",
              strategy: "selfHosted",
            },
            {
              family: "Exo",
              variants: ["900"],
              strategy: "selfHosted",
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
};

export default config;
