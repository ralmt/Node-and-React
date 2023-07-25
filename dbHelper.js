const mongoose = require("mongoose")

mongoose.set("strictQuery", false);
const mongooseDB = "mongodb://atlas-sql-6480bf8c43415803582c195f-8keet.a.query.mongodb.net/sample_airbnb?ssl=true&authSource=admin";

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(mongoDB);
    console.log("DB connected!");
  }