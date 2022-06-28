const { MongoClient } = require('mongodb');

// const url = 'mongodb://eduwork:asdasdasd@localhost:27017?authSource=admin';
// const url = process.env.MONGODB_CONNECTION_STRING;
const url = "mongodb://eduwork:asdasdasd@ac-2vwg8c3-shard-00-00.1fcc9da.mongodb.net:27017,ac-2vwg8c3-shard-00-01.1fcc9da.mongodb.net:27017,ac-2vwg8c3-shard-00-02.1fcc9da.mongodb.net:27017/?ssl=true&replicaSet=atlas-fql8z3-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

(async () => {
    try {
        await client.connect();
        console.log('koneksi ke mongodb berhasil');
    } catch (e) {
        console.log(e)
    }
})();

const db = client.db('eduwork-native');

module.exports = db;