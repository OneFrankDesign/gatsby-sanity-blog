import type { GatsbyConfig } from 'gatsby';
require('dotenv').config();
require('dotenv').config({
  path: `.env.${process.env['NODE_ENV']}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `OneFrankDesign`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `A blog about design and development.`,
    slogan: `Your vision, coded with precision.`,
    navigation: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'About',
        path: '/about',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
      {
        name: 'Portfolio',
        path: '/portfolio',
      },
      {
        name: 'Services',
        path: '/services',
      },
      {
        name: 'Certifications',
        path: '/certifications',
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env['SANITY_PROJECT_ID'],
        dataset: process.env['SANITY_PROJECT_DATASET'],
        token: process.env['SANITY_READ_TOKEN'],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'GA-TRACKING_ID', // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
