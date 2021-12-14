const mongoose=require('mongoose')

var schema=new mongoose.Schema({
    uuid:{
        type:String,
        required:true
    },
})

const Userdb=mongoose.model('userdb',schema);

module.exports=Userdb;

