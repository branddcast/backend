const { MongoClient } = require("mongodb");
require('dotenv').config();

const {DB_USERNAME, DB_PASSWORD} = process.env;
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wqn80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

exports.client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});