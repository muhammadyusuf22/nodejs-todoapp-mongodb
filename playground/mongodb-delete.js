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

    // Silahkan Uncomment untuk mencoba

    // Delete Many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })

    // Delete One
    // db.collection('Todos').deleteOne({text: 'Makan Pagi'}).then((result) => {
    //     console.log(result);
    // })

    // Find One and Delete
    db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
        console.log(result);
    })

    // db.close()
})
