const { GraphQLObjectType, GraphQLID, GraphQLString , GraphQLList } = require("graphql");
const {ClientType} = require('./ClientSchema')
const {findProjectById, findAllProjects} = require('../database/project/project_db_schema')
const {findClientById} = require('../database/client/client_db_schema')

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status : { type: GraphQLString},
        client : { 
            type : ClientType,
            resolve(parent, args) {
                return findClientById(parent.clientId);
            },
        }
    }),
});

const ProjectById = {
    type: ProjectType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return findProjectById(args.id);
    },
};

const AllProjects = {
    type: new GraphQLList(ProjectType),
    resolve(parent, args) {
        return findAllProjects()
    },
};

module.exports = {AllProjects , ProjectById } ;