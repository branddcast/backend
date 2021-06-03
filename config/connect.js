const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://mongodb:mongodb@cluster0.wqn80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

exports.client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});