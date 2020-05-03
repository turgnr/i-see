const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb+srv://dolev:205577034Dd@isee-4oc3b.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(URL,{ useUnifiedTopology:
true})
    .then (client => {
        console.log('Connected to Database')
        const db = client.db('LOCATION')
        const locationCollection = db.collection('locations')
        app.use(bodyParser.urlencoded({ extended: true }));
        app.get('/', (req, res) => {
            db.collection('locations').find().toArray()
                .then(results => {
                    console.log(results)
                    res.sendFile(__dirname + '/index.html')

                })
                .catch(error => console.error(error))
        })

        app.post('/location', (req, res) => {
            locationCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.listen(3000, function () {
            console.log('listening on 3000')
    })


}).catch(error => console.error(error))


