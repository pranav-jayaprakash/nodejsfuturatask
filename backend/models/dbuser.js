const mongoose=require('mongoose')

const Usersdb= new mongoose.Schema({
    emp_name:{type:String,required:true},
    age:{type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('ussr',Usersdb)