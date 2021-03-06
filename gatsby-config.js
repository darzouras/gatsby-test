module.exports = {
    siteMetadata: {
        title: `DarHopping`,
        siteUrl: `https://brave-mclean-849501.netlify.com/`,
        description: `Join me in Dar Hopping from one topic to the next in my personal blog.`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/content/`,
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-emotion`
    ]
}
