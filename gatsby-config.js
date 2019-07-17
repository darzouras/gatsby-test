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
                path: `${__dirname}/src/`,
            }
        },
        `gatsby-transformer-remark`
    ]
}