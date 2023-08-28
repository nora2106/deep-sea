const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const routes = express.Router();

// This will help us connect to the database
const dbo = require("../connection");

// This helps convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get list of all creatures
routes.route("/creatures").get(function (req, res) {
    let db_connect = dbo.getDb("deep_sea");
    db_connect
        .collection("creatures")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get creatures by page
routes.route("/creatures/:page").get(function (req, res) {
    let db_connect = dbo.getDb("deep_sea");
    let max = 20;
    // dbo.getCount(db_connect.collection('creatures')).then(count => {
    //     // let count = dbo.getCount(db_connect.collection('creatures'));
    db_connect
            .collection("creatures")
            .find({}).skip(req.params.page * max).limit(max)
            .toArray(function (err, result) {
                if (err) throw err;
                res.json(result);
            });
});

// Get a single creature by id
routes.route("/creatures/id/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("creatures")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

//get creature by diet
routes.route("/creatures/diet/:diet").get(function (req, res) {
    let db_connect = dbo.getDb();
    let query = { Feed: req.params.diet };
    db_connect
        .collection("creatures")
        .find(query).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//get creature by zone
routes.route("/creatures/zone/:zone").get(function (req, res) {
    let db_connect = dbo.getDb();
    let query = { Zone: req.params.zone + ' Zone' };
    db_connect
        .collection("creatures")
        .find(query).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = routes;
