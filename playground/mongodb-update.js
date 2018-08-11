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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b6ed5b679ed0957a4a4b401')
    // }, {
    //     $set: {
    //         complete: false
    //     }
    // }, {
    //     returnOriginal: true
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b6ed9a479ed0957a4a4b4dd')
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    });

    // db.close()
})
