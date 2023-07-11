// const {MongoClient} = require('mongodb');
// const Realm = require("realm-web");
//
// async function main() {
//     const uri = "mongodb+srv://nklinger:n-database@cluster0.jczvifm.mongodb.net/?retryWrites=true&w=majority"
//     const client = new MongoClient(uri);
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//
//         // Make the appropriate DB calls
//         await getData(client, {}, 1, 20);
//
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
//
// main().catch(console.error);
//
// async function getData(client, query, page, limit) {
//     let db = client.db('deep_sea').collection('creatures')
//     const count = await getCount(db)
//     const set = await db.find(query).skip((page - 1) * limit).limit(limit).toArray(function (err, result) {
//         if (err) throw err;
//         result.forEach(item => console.log(item.Name))
//         console.log(result)
//     })
//     console.log(await db.find(query).skip((page - 1) * limit).limit(limit).toArray(function (err, result) {}))
// }
//
// async function getCount(db) {
//     return await db.countDocuments();
// }
//
// module.exports = {
//     main
// }

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://nklinger:n-database@cluster0.jczvifm.mongodb.net/?retryWrites=true&w=majority"
const Db = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db)
            {
                _db = db.db("deep_sea");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};
