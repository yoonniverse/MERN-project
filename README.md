## MERN project

Simple project using Express(Node.js) + React + MongoDB.
From https://youtube.com/playlist?list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm (https://github.com/bradtraversy/mern-tutorial), modified few things like

- add edit functionality for the post
- prevent infinite loop in `useEffect` at `frontned/pages/Dashboard.jsx`.

### Functionality

1. Authorization
2. CRUD using REST API

### How to Reproduce


#### Development
1. create `.env` file.
```
NODE_ENV=development
PORT=5000
MONGO_URI=YOUR_MONGODBATLAS_URI
JWT_SECRET=RANDOM_STRING
```
2. `npm install`
3. `npm install --prefix frontend`
4. `npm run dev`

#### Production
1. use heroku https://www.heroku.com/
2. at project config vars, set
```
NODE_ENV=production
MONGO_URI=YOUR_MONGODBATLAS_URI
JWT_SECRET=YOUR_JWT_SECRET
```
```

### Notes

- don't forget to add 0.0.0.0/0 for MongoDBAtlas allowed ip before deploying
- **Deployed at https://goalsyoonsoo.herokuapp.com/** (can be unlaunched anytime)
