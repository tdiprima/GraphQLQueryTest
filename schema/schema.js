const graphql = require('graphql');
const Image = require('../models/image');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const ImageType = new GraphQLObjectType({
    name: 'Image',
    fields: ( ) => ({
        case_id: { type: GraphQLString },
        width: { type: GraphQLInt },
        height: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        image: {
            type: ImageType,
            args: { case_id: { type: GraphQLString } },
            resolve(parent, args){
                return Image.findById(args.case_id);
            }
        },
        images: {
            type: new GraphQLList(ImageType),
            resolve(parent, args){
                return Image.find({});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
