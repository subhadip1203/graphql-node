const { GraphQLObjectType, GraphQLID, GraphQLString , GraphQLList } = require("graphql");
const {ClientType} = require('./ClientSchema')


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
                return { id: 1, name: "user", email: "subhadip@gmail.com" };
            },
        }
    }),
});

const ProjectById = {
    type: ProjectType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return { id: 1, name: "project", description: "project description" , status : "ongoing" };
    },
};

const AllProjects = {
    type: new GraphQLList(ProjectType),
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return [
            { id: 1, name: "project1", description: "project description 1" , status : "ongoing" },
            { id: 1, name: "project2", description: "project description 2" , status : "ongoing" }
        ];
    },
};

module.exports = {AllProjects , ProjectById } ;