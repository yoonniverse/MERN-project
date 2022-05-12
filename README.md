## MERN project

Simple project using Express(Node) + React + MongoDB.
From https://youtube.com/playlist?list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm (https://github.com/bradtraversy/mern-tutorial), modified few things like

- add edit functionality for the post
- prevent infinite loop in `useEffect` at `frontned/pages/Dashboard.jsx`.

### Functionality

1. Authorization
2. CRUD using REST API

### How to Reproduce

1. `npm install`
2. `npm install --prefix frontend`
3. `npm run build --prefix frontend`
4. `npm start`

### Notes

- don't forget to add 0.0.0.0/0 for MongoDBAtlas allowed ip before deploying
- **Deployed at https://goalsyoonsoo.herokuapp.com/** (can be unlaunched anytime)
