const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:usertwo@ictake-menucard.9ibpe.mongodb.net/EMENUCARD?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    email  : String,
    uname : String,
    password : String,
  
});

var Userdata = mongoose.model('user', NewUserSchema);             

module.exports = Userdata;