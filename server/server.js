const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const listRouter = require('./routes/list.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.urlencoded({extended: true})); // needed for axios requests
// app.use(bodyParser.json());
app.use(express.json()) // for parsing application/json

app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/list', listRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});