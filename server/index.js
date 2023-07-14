const express = require('express');
const colors  = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db')
const port = process.env.PORT || 6969;

const app = express();

//Connect to database
connectDB().then();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, function(){console.log(`Server running on port ${port}`);});