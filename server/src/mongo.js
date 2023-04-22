const mongoose = require("mongoose");
const HOST = "localhost";
const uri = `mongodb://${HOST}:27017/rbac`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const connectWithDb = () => {
    mongoose.connect(uri, options, (err, db) => {
        if (err) {
            console.error(err);
        } else {
            console.log("database connection established");
        }
    });
};
module.exports = connectWithDb;
