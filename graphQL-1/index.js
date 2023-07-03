require('dotenv').config()
const express = require("express")
const { graphqlHTTP } = require("express-graphql")

// --------- Database --------
const DB_Connect = require('./app/database/dbConnect')
DB_Connect()

const schema = require('./app/schema/RootQuery')



var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'dev',
  })
)


const port = process.env.SERVER_PORT || 8000
app.listen(4000 , () => {console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)})
