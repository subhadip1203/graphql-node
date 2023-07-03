const { GraphQLObjectType , GraphQLSchema} = require("graphql")
const  {AllClients , ClientById , addCleint } = require ('./ClientSchema')
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

const RootMutation = new GraphQLObjectType({
    name: "mutation",
    fields : {
        addClient : addCleint
    }
})

const schema = new GraphQLSchema({
    query : RootQuery,
    mutation: RootMutation
})

module.exports = schema