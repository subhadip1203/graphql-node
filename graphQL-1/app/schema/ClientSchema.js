const { GraphQLObjectType, GraphQLID, GraphQLString , GraphQLList , GraphQLNonNull } = require("graphql");

const {findClientById, findAllClient , saveClient} = require('../database/client/client_db_schema')
 
const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
    }),
});

const ClientById = {
    type: ClientType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return findClientById(args.id);
    },
};

const AllClients = {
    type: new GraphQLList(ClientType),
    resolve(parent, args) {
        return findAllClient();
    },
};


const addCleint = {
    type : ClientType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
        return saveClient(args);
    },
}

module.exports = {ClientType , AllClients , ClientById , addCleint} ;
