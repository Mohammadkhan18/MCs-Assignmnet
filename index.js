const app = require("./app");
require('dotenv').config();
const mongoose = require("mongoose");
const port = 5000;
const API = process.env.MONGODB_URL

mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();