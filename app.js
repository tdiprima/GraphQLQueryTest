/*
This script is used to set up a GraphQL API using Node.js with Express and express-graphql.
It also establishes a connection to a MongoDB database through Mongoose. The GraphQL schema 
is imported from another file. The API is set to be available on port 4000 under the '/graphql' route. 
It also enables the graphiql tool which provides a user interface for testing GraphQL queries.
*/
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to database
mongoose.connect('mongodb://localhost:27017/lalala');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('http://localhost:4000/graphql');
});
