const mongo = require("mongodb");

exports.findById = (props) => {
    const { res, params, db } = props;
    const movies = db.collection('movies');
    var o_id = new mongo.ObjectID(params.id);
    movies.findOne({ '_id': o_id }, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
}

exports.getMovies = (props) => {
    const {res, db} = props;
    const movies = db.collection('movies');
    movies.find({}).limit(15).toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
}