const express = require('express');
// const cors = require('cors')
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const apiSecret = cloudinary.config().api_secret;


const app = express();

const PORT = 8080;
// const HOST = "localhost";

// app.use(cors())

app.get('/info', (req, res, next) => {
    // console.log(cloudinary.url("samples/cloudinary-group.jpg"));
    // res.send('test');
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    );

    res.json({
        number: 1,
        name: 'John',
        gender: 'male'
    });
});

app.get('/signature', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    );
    
    const timestamp = Math.round((new Date).getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request({
        timestamp: timestamp,
        source: 'uw',
        folder: 'samples'
    }, apiSecret);

    // return { timestamp, signature }
    res.json({
        timestamp: timestamp,
        signature: signature
    });
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Starting Proxy at ${PORT}`);
});

//  exports.app = functions.https.onRequest(app);
