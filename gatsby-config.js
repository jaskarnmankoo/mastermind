module.exports = {
  pathPrefix: '/mastermind',
  plugins: [
    'gatsby-plugin-csp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
  siteMetadata: {
    title: 'Mastermind',
    description: 'Single player version of Mastermind',
    author: 'Jaskarn Mankoo'
  }
};
