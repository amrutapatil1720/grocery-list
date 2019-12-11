const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const Controller =require('./controllers.js');
const bodyParser = require('body-parser')


// app.get('/', (req,res) => res.send('Hello World'));
app.use('/' , express.static(path.join(__dirname, '../client/dist/')));


app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));
app.use( bodyParser.json() );       // to support JSON-encoded bodies



app.get('/api/groceries', (req,res) =>  {
  //console.log('getting groceries');
  Controller.getGroceries(req,res);
  // console.log("getting the response");
  // res.send('groceries sent');
});

app.post('/api/item' , (req,res) => {
 // console.log('POST RECEIVED')
  Controller.addGroceries(req,res);

})

app.listen(port , () => console.log(`listening on ${port}`));