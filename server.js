const express = require('express');
const cors = require('cors') //required to communicate with the front-end

const app = express();

const port = 8001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config');

app.use(cors());

require('./server/routes/products.routes')(app);

app.listen(port, () => console.log(`Entering the Death Star at port: ${port}`));