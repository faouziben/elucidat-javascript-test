const express = require('express');
const seats = require('./seatData');
const cors = require('cors');
const port = '8080';
const app = express();
app.options('*', cors());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.options(`*`, cors());



/**
 * Start the server to listen on port 8080
 */
app.get('/seats', (req, res) => {
    res.send(seats);
  });
app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});