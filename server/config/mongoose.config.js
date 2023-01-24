const mongoose = require("mongoose");

const database = "product_manager"

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`)
.then(() => console.log(`hacking into the rebel database ${database}`))
.catch((error) => console.log(`The rebels have tricked us! ${error}`));