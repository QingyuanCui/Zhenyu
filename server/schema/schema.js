const Boy = require('../models/Boy');
const Girl = require('../models/Girl');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');


//Girl Type
const GirlType = new GraphQLObjectType({
    name:'girl',
    fields: () => ({
        id: { type: GraphQLID },
        name:{ type: GraphQLString },
        country:{ type: GraphQLString },
        eyeColor:{ type: GraphQLString },
        hairColor:{ type: GraphQLString },
        height:{ type: GraphQLInt },
        weight:{ type: GraphQLInt },
        cup:{ type: GraphQLString },
        breasts:{ type: GraphQLBoolean },
        favoriteOf: {
            type: BoyType,
            resolve(parent, args){
                return Boy.findById(parent.favoriteOf);
            }
        }
    })
});

//Boy Type
const BoyType = new GraphQLObjectType({
    name:'boy',
    fields: () => ({
        id: { type: GraphQLID },
        name:{ type: GraphQLString },
        email:{ type: GraphQLString },
        phone:{ type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        girls:{
            type: new GraphQLList(GirlType),
            resolve(parent, args){
                return Girl.find();
            }
        },
        girl: {
            type: GirlType,
            args: { id: { type: GraphQLID } },
            resolve(parent,args){
                return Girl.findById(args.id);
            }
        },
        boys:{
            type: new GraphQLList(BoyType),
            resolve(parent, args){
                return Boy.find();
            }
        },
        boy: {
            type: BoyType,
            args: { id: { type: GraphQLID } },
            resolve(parent,args){
                return Boy.findById(args.id);
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});