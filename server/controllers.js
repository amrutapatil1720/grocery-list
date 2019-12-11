const Models =require('./models.js');


module.exports={
  getGroceries: (req,res) => {
    Models.getGroceries((err,data) => {

      if(err) {
        res.status(400).send(err);
      }
    else {
      // console.log("controller data is:")
      //console.log('my err is actuslly my data:', data)
      res.send(data);
    }
    });
  },

  addGroceries : (req,res) => {
      Models.addGroceries((err,data) => {
        if(err) {
          res.status(400).send(err);

        }
        else {
          //console.log(data);
          res.send(data);
        }
      },req.body)
  }
}