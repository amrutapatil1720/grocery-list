<!-- <!-- # Full Stack Review Workshop
create server directory in root
src directory in client- > components

from root install-
npm install
npm run react-dev
npm i express body-parser nodemon mysql jquery

check webpack.config for path and make the src and dist at that location.check whether they are present at correct path.

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');



check package.json

create index.js in server folder
add below in /server/index.js
const express= require('express');
const path= require('path');
const app=express();
const port =3000;

// app.get('/', (req,res) => res.send('Hello World'));
app.use('/' , express.static(path.join(__dirname, '../client/dist/')));
app.listen(port , () => console.log(`listening on ${port}`));
------------

npm run react-dev
npm start
and check the url whether server is running or not.
--------------------------
create index.html in dist
<html>
  <head>
    <title>Grocery List</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="app">
      <div>
        Hello World

      </div>
    </div>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>

 -->
 <!-- ---------
 move style.css to dist folder, so that css will be applicable to html page.
 -------------------
 re-run the npm start and npm run react-dev


 remove app.get line and add below -

const path= require('path');
 app.use('/static', express.static(path.join(__dirname, 'public')))
 -->


<!-- /src/index.jsx
console.log something so that it can visible to browsers console page (dev tools).


------------
goto localhost/api/groceries
and check whether console log msg is getting
------------
mysql -u root
show databases;
use workshop;
show tables; -->


---------------
create files  controllers and models
models.js ->run server

ps -a
kill -9 {PID}


--------------
setup the front end after back end working
-------------------


post

npm install --save body-parser# hrsf124-grocery-list
