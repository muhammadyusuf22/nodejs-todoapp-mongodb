// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected To MongoDB Server');

    // Perintah Find atau Select tanpa find By atau Parameters
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('TODOS');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch todo', err);
    // });

    // Perintah Find atau Select Menggunakan Parameter
    // db.collection('Todos').find({complete: false}).toArray().then((docs) => {
    //     console.log('TODOS');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch todo', err);
    // });

    // perrintah Find atau Select count
    db.collection('Todos').find().count().then((count) => {
        console.log(`TODOS count : ${count}`);
    }, err => {
        console.log('Unable to fetch todo', err);
    });

    db.close()
})
