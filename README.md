# poolFetchBackend
Simple node.js/express.js app which provides api to fetch all our pools

This API provides two routes:
1. /pools/all
    - returns json with all our pools hardcoded
2. /pools/:id
    - returns json with single pool based on the pool ID provided 

How to start the local server:
1. Clone the repo
2. navigate to the project dir
3. cp .env.example .env
4. npm install
5. npm run dev

App is now available on localhost:3057
