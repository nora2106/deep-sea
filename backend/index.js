const express = require("express");
const PORT = process.env.PORT || 3001;
const dbo = require("./connection");
const app = express();
app.use(express.json());
app.use(require("./routes/creatures"));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    // Perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${PORT}`);
});
// app.get("/api/all", async (req, res) => {
//     const result = await connection.main()
//     console.log("Results: " + result)
//
// });


