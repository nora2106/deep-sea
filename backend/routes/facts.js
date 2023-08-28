const express = require("express");

const routes = express.Router();

// This will help us connect to the database
const dbo = require("../connection");

// Get list of all facts
// routes.route("/facts").get(function (req, res) {
//     let db_connect = dbo.getDb("deep_sea");
//     db_connect
//         .collection("facts")
//         .find({})
//         .toArray(function (err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
// });

//get random fact
