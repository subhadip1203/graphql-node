const { GraphQLObjectType , GraphQLSchema} = require("graphql")
const  {AllClients , ClientById } = require ('./ClientSchema')
const  {AllProjects , ProjectById } = require('./ProjectSchema')
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields : {
        // all client fields
        client : ClientById,
        clients : AllClients,
        // all project fields
        project : ProjectById,
        projects : AllProjects
    }

})

const schema = new GraphQLSchema({
    query : RootQuery
})

module.exports = schema