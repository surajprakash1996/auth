const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

async function dbConnection() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Connected!`);
    }
    catch(err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = dbConnection;