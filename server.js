const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb+srv://dolev:205577034Dd@isee-4oc3b.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({ extended: true }));
const items = {
    "name": "orv",
    "x": "3",
    "y": "4",
    "description": "ddd"
};

MongoClient.connect(URL, {
    useUnifiedTopology:
        true
})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('LOCATION')
        const locationCollection = db.collection('locations')
        app.use(bodyParser.urlencoded({ extended: true }));
        locationCollection.insertOne(items)
            .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
            .catch(err => console.error(`Failed to insert item: ${err}`))


    }).catch(error => console.error(error))


