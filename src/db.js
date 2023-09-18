const MongoClient = require("mongodb").MongoClient;
const url = "ongodb://localhost:27017/myproject";

const client = new MongoClient(url, { useUnifiedTopology: true });

module.exports = client;
