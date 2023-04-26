const express = require('express');
const app = express();
var server = express();
const mongoose = require('mongoose');
const cors = require('cors');
var routes = require('./routes/routes');
//const port = 8086;

//database link
//uri = "mongodb://127.0.0.1:27017/testdb";
uri ="mongodb+srv://princechauhan1424:mXnsFEIIzjxZU10M@princeapi.du4gbh7.mongodb.net/testdb";
//link from where we can send request to database
    app.use(cors(
        {
        origin: "http://localhost:4200"
        }
    ));

    //database connection
mongoose.connect(uri)
  .then(() => console.log('Database Connected!'));

  //listen port
app.listen(8086, function port(error){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("Port Connected.");
    }
});

//app.use(cors());
app.use(express.json());
app.use(routes);