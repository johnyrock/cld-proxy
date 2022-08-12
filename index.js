const express = require('express');
// const cors = require('cors')
require('dotenv').config();
const cloudinary = require('cloudinary').v2;



const app = express();

const PORT = 8080;
// const HOST = "localhost";

// app.use(cors())

app.get('/info', (req, res, next) => {
    // console.log(cloudinary.url("samples/cloudinary-group.jpg"));
    // res.send('test');
    res.json({
        number: 1,
        name: 'John',
        gender: 'male'
      });
 });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Starting Proxy at ${PORT}`);
 });

//  exports.app = functions.https.onRequest(app);
