const mongoose = require('mongoose');
var schema = mongoose.Schema;
var  employeSchema = new schema({
    
    name:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
});

module.exports = mongoose.model('tests',employeSchema);