var express = require('express');
const config = require('./config.js');
var app = express();
var cors = require('cors');
var {client} = require("./config/connect.js");
const moviesController = require('./controllers/moviesController.js');

console.log(`NODE_ENV=${config.NODE_ENV}`);
var {PORT} = config;

app.use(cors());

const run = async () => {
    try {
        await client.connect();
        const db = client.db('sample_mflix');

        app.get('/api', async (req, res) => {
            res.send('Hello World!');            
        });

        app.get('/api/movies', (props) => {
            moviesController.getMovies({...props, db});
        });

        app.get('/api/movies/:id', (props) => {
            moviesController.findById({...props, db});
        })

        app.use(express.static(__dirname + '/public'));

        app.listen(PORT, function () {
            console.log(`Example app listening on port ${PORT}!`);
        });
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
  }
run().catch(console.dir);