import nba_home from './images/nba_home.jpg'
import league from './images/league.jpg'
import new_post from './images/new_post.jpg'
import routes_home from './images/routes_home.jpg'
import routes_route from './images/routes_route.jpg'
import routes_add from './images/routes_add.jpg'
import bm_home from './images/bm_home.jpg'
import bm_expand from './images/bm_expand.jpg'
import bm_add from './images/bm_add.jpg'
import Badge from 'react-simple-badges'


const projects = [
    {
        id: 1,
        title: 'Full Court',
        intro: 'Social app that allows users to display their fantasy basketball teams and post about their progress, and read posts from fellow users.',
        description: `Full Court is a full-stack PERN application created for fantasy basketball players. Registered users display the NBA players on their fantasy basketball team and write posts about their players and their team's progress. They can also view posts from other users on the League Stories page, which allows them to gain insight about how to improve their team. An updated version, with commenting and liking features for user posts, is coming soon.`,
        live: 'https://full-court.vercel.app/',
        client: 'https://github.com/mkdnt/nba-fantasy-client',
        server: 'https://github.com/mkdnt/nba-fantasy-server',
        image1: nba_home,
        image2: new_post,
        image3: league,
        reactBadge: <Badge name='React' style={{width: '60px', height: '20px'}}/>,
        htmlBadge: <Badge name='HTML5' style={{width: '60px', height: '20px'}}/>,
        cssBadge: <Badge name='CSS3' style={{width: '60px', height: '20px'}}/>,
        nodeBadge: <Badge name='Node.js' style={{width: '60px', height: '20px'}}/>,
        psqlBadge: <Badge name='PostgreSQL' style={{width: '60px', height: '20px'}}/>,
        jsBadge: <Badge name='JavaScript' style={{width: '60px', height: '20px'}}/>,
        herokuBadge: <Badge name='Heroku' style={{width: '60px', height: '20px'}}/>,
        vercelBadge: <Badge name='Vercel' style={{width: '60px', height: '20px'}}/>,
    },
    {
        id: 2,
        title: 'DC Routes',
        intro: 'Mapping app for runners in the DC area. Discover new running routes and add your own for other users to enjoy.',
        description: `DC Routes is a full-stack PERN application created for runners in Washington, DC. Users can sort routes based on distance, difficulty, type of run, or area of DC. Users can also add, edit, and delete their own routes. This app will be updated soon with more robust features, including map images from a third-party API, user registration and authentication, and commenting features on individual routes.`,
        live: 'https://dc-routes-client.vercel.app/',
        client: 'https://github.com/mkdnt/dc-routes-client',
        server: 'https://github.com/mkdnt/dc-routes-server',
        image1: routes_home,
        image2: routes_route,
        image3: routes_add,
        reactBadge: <Badge name='React' style={{width: '60px', height: '20px'}}/>,
        htmlBadge: <Badge name='HTML5' style={{width: '60px', height: '20px'}}/>,
        cssBadge: <Badge name='CSS3' style={{width: '60px', height: '20px'}}/>,
        nodeBadge: <Badge name='Node.js' style={{width: '60px', height: '20px'}}/>,
        psqlBadge: <Badge name='PostgreSQL' style={{width: '60px', height: '20px'}}/>,
        jsBadge: <Badge name='JavaScript' style={{width: '60px', height: '20px'}}/>,
        herokuBadge: <Badge name='Heroku' style={{width: '60px', height: '20px'}}/>,
        vercelBadge: <Badge name='Vercel' style={{width: '60px', height: '20px'}}/>,
    },
    {
        id: 3,
        title: 'Bookmarks',
        intro: 'A simple app to save bookmarks online.',
        description: `Bookmarks is a frontend application built with jQuery. Users can store a list of links to websites they wish to visit again. Each bookmark is given a description and rating, and can be deleted if the user no longer wants to keep it. Bookmarks can be sorted according to rating.`,
        live: 'https://thinkful-ei-tiger.github.io/mike-dent-bookmarks-app/dist/',
        client: 'https://github.com/thinkful-ei-tiger/mike-dent-bookmarks-app',
        image1: bm_home,
        image2: bm_expand,
        image3: bm_add,
        reactBadge: <Badge name='jQuery' style={{width: '60px', height: '20px'}}/>,
        htmlBadge: <Badge name='HTML5' style={{width: '60px', height: '20px'}}/>,
        cssBadge: <Badge name='CSS3' style={{width: '60px', height: '20px'}}/>,
        jsBadge: <Badge name='JavaScript' style={{width: '60px', height: '20px'}}/>,
    }
]

export default projects