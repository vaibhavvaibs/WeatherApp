const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const request = require('request');
const mongoose = require("mongoose");

  
const Weather = require('./model/weather');

let url    = 'http://api.openweathermap.org/data/2.5/weather?q='
let appId  = 'appid=7aee39e846cff4989cd824384fb832d7';

const apiKey = '7aee39e846cff4989cd824384fb832d7';

mongoose.connect('mongodb://localhost:27017/weather')
.then(() => { console.log('connected to database') })
.catch(() => { console.log('connection failed!')})

app.use(cors());
app.use(bodyParser.json());



app.get('/weather/:city', function(req, res, next){
  let city = req.params.city;
  let dat, i, flag = true; 
  console.log(city)

  url = url+city+"&"+appId;

 request(url, function (error, response, body) {
      body = JSON.parse(body);
      if(error && response.statusCode != 200){
        throw error;
      }
 
     const weather = new Weather({
      location: req.params.city
    });
    weather.save().then(cityStored => {
      res.status(201).json({
        message: "location audit successfully",
      });
      console.log('save')
    });

    let today = new Date();
    console.log(today)
    // let date = today.getDate();
    let date = 5;
    console.log(date)
    n = parseInt(date) 
     for (i = 2; i <= n - 1; i++) 
      if (n % i == 0) { 
          flag = false; 
          break; 
      } 

      if (flag == true) 
          res.json({message: 'Date is prime' ,body : body});
      else
          res.json({message :'Date is not prime so no date'});
   });
});

app.listen(3000, () => {
	console.log("server listening at post 3000");
})

