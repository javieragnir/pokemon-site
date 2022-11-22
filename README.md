# Pokemon Trading Site
A live version of this site can be found at https://pokemon-trades-frontend.fly.dev/

# Overview
This is a Pokemon-themed social media website centered on posting trades and interacting with posts from other users. Pokemon is one of my favorite game franchises, so I wanted to build something that could be useful to other players!
- The backend was built using Node.js, Express.js and a Postgres database, and handles user requests via REST API endpoints.
- The frontend is a single-page application built using React that makes use of the backend API.

# Usage
- Users are first directed to the homepage. Users may view trades and other users' pages by clicking on the various tabs and links, but posting new trades or comments and "liking" content requires sign-in.
- Sign-in can be achieved by clicking the link on the right side of the navigation bar at the top of the site.
- From there, users can post trades by navigating to /trades via the "trades" tab on the navigation bar. Trades can be posted by clicking on the post button in the top-right area of the page.
- Users may also try clicking on the various links on each trade post to navigate to user pages and single-post views.

# Todos
- Implement responsive web design for smaller screen sizes.
- Implement a scrolling/loading mechanism for posts if the number of posts is large.

# Credits
This project was built by myself, Javier Agnir. Special thanks to [The Odin Project](https://www.theodinproject.com/) and the University of Helsinki's [Full Stack Open](https://fullstackopen.com/en/) for being excellent learning resources.
