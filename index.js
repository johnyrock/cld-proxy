const express = require('express');
// const cors = require('cors')
const cloudinary = require('cloudinary').v2;
require('dotenv').config();


const app = express();

const PORT = 8080;
// const HOST = "localhost";

// app.use(cors())

app.get('/info', (req, res, next) => {
    res.send('Proxy Service Test 2');
 });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Starting Proxy at ${PORT}`);
 });

//  exports.app = functions.https.onRequest(app);
