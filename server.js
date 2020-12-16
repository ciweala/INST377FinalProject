// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
// import { pullAt } from 'cypress/types/lodash';
// import countries from './public/lab_6/countries.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.param('user_id', function (req, res, next, id) {
  req.user = {
    id: id,
    name: 'student'
  }
  next()
  })


app.route('/api')
  .get(async (req, res) => {
    console.log('GET request detected');
    console.log('fetch request data', json);
    res.render('index.html', {});
  })
  .post(async (req, res) => {
    console.log('POST request detected');
    const data = await fetch('https://raw.githubusercontent.com/umdio/umdio-data/master/courses/data/202008.json');
    const json = await data.json();
    res.json(json);
  })
  .put(async (req, res) => {
    console.log('PUT request detected');
    req.user.name = req.params.name
    res.json(req.user)
  }); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
