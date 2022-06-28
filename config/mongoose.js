const mongoose = require('mongoose');

// mongoose.connect('mongodb://eduwork:asdasdasd@localhost:27017/eduwork-mongoose?authSource=admin');
mongoose.connect('mongodb://eduwork:asdasdasd@ac-2vwg8c3-shard-00-00.1fcc9da.mongodb.net:27017,ac-2vwg8c3-shard-00-01.1fcc9da.mongodb.net:27017,ac-2vwg8c3-shard-00-02.1fcc9da.mongodb.net:27017/?ssl=true&replicaSet=atlas-fql8z3-shard-0&authSource=admin&retryWrites=true&w=majority')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Server database terhubung'));