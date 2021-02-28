import home from './images/home.jpg'

const projects = [
    {
        id: 1,
        title: 'Full Court',
        description: 'Social app that allows users to display their fantasy basketball teams and post about their progress, and read posts from fellow users.',
        tech: 'React, Express, Node, PostgreSQL',
        live: 'https://full-court.vercel.app/',
        client: 'https://github.com/mkdnt/nba-fantasy-client',
        server: 'https://github.com/mkdnt/nba-fantasy-server',
        image1: home,
        image2: home,
        image3: home,
    },
    {
        id: 2,
        title: 'DC Routes',
        description: 'Mapping app for runners in the DC area. Discover new running routes and add your own for other users to enjoy.',
        tech: 'React, Express, Node, PostgreSQL',
        live: 'https://dc-routes-client.vercel.app/',
        client: 'https://github.com/mkdnt/dc-routes-client',
        server: 'https://github.com/mkdnt/dc-routes-server',
        image1: home,
        image2: home,
        image3: home,
    }
]

export default projects