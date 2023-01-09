import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Max Christiansen Dev`,
    description: `Developer devoted to creating beautifully simple, modern web experiences - meet Max Christiansen!`,
    author: `@RealMaxFaze`,
    image: `https://max-christiansen-dev.com/otter-icon.png`,
    siteUrl: `https://max-christiansen-dev.com`,
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
        name: `Max Christiansen Dev`,
        short_name: `MCD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/otter-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Mr Dafoe",
              strategy: "selfHosted",
            },
            {
              family: "Exo",
              variants: ["500", "700", "900"],
              strategy: "selfHosted",
            },
            {
              family: "Roboto Mono",
              variants: ["400"],
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
