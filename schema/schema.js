const graphql = require('graphql');
const Image = require('../models/image');
const Object = require('../models/object');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat
} = graphql;

const ImageType = new GraphQLObjectType({
    name: 'Image',
    fields: ( ) => ({
        case_id: { type: GraphQLString },
        width: { type: GraphQLInt },
        height: { type: GraphQLInt }
    })
});

const ObjectType = new GraphQLObjectType({
    name: 'Object',
    fields: ( ) => ({
        object_type: { type: GraphQLString },
        x: { type: GraphQLFloat },
        y: { type: GraphQLFloat }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        image: {
            type: ImageType,
            args: { case_id: { type: GraphQLString } },
            resolve(parent, args){
                return Image.findOne({case_id: args.case_id});
            }
        },
        images: {
            type: new GraphQLList(ImageType),
            resolve(parent, args){
                return Image.find({});
            }
        },
        object: {
            type: ObjectType,
            resolve(parent, args){
                return Object.findOne({});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
