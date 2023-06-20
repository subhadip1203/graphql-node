const { GraphQLObjectType, GraphQLID, GraphQLString , GraphQLList } = require("graphql");

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
        return { id: 1, name: "subhadip", email: "subhadip@gmail.com" };
    },
};

const AllClients = {
    type: new GraphQLList(ClientType),
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return [
            { id: 1, name: "subhadip1", email: "subhadip1@gmail.com" },
            { id: 2, name: "subhadip2", email: "subhadip2@gmail.com" }
        ];
    },
};

module.exports = {ClientType , AllClients , ClientById } ;
