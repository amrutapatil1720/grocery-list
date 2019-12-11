const mysql =require('mysql');
var connection=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'workshop'
});

connection.connect();

connection.query('select * from groceries', (error, data) => {

  // console.log("connected to database");
  // console.log(data);
});

module.exports = {
  getGroceries: (callback) => {
    //Query for data
    //do something with callback

    connection.query('SELECT * from groceries', (error, results) => {
      if (error) {
        callback(error);
      }
      else {
        // console.log("Model data is:", results);
        //console.log(results[0]);
        callback(null,results);
      }

    });


  },

  addGroceries : (callback,data) => {
    console.log(data.itemName);
    console.log(data.quantity);

    connection.query(`insert into groceries (item , quantity) values ('${data.itemName}',${data.quantity});`, (error,results) => {
      if(error) {
        callback(error);
      }
      else {
        callback(null, results);
      }
    });
  }
}

//connection.end();
