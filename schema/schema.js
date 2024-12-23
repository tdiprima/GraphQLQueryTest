/*
This script defines a GraphQL schema providing endpoints to query for image and object data. 
It imports modules including graphql and lodash, as well as two models, Image and Object. 
The schema defines two GraphQLObjectTypes, ImageType and ObjectType, which describe the 
shape of the data returned for images and objects. 

Specifically, ImageType includes fields for case_id, width, and height.
ObjectType includes fields for object_type, x, and y.

The root query object, RootQuery, provides three fields that can be queried: image, images, and object. 
The image field uses the ImageType and requires a case_id as an argument to return a specific image. 
The images field uses a GraphQLList of ImageType and returns all images from the database. 
The object field returns a single object as defined by the ObjectType.

Finally, the module exports a new GraphQLSchema object with RootQuery as the root query type.
*/
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
