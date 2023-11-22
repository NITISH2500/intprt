const mongoose=require("mongoose");
const Db='mongodb+srv://gupta:<Nitish@2002>@cluster0.7ixrdl5.mongodb.net/authe?retryWrites=true&w=majority'

mongoose.connect(Db).then(()=>{
    console.log(`database connected succesfully`);
})
.catch(()=>{
    console.log(`Not connected`);
})
const LoginSchema=new Mongose.Schema({
 name:{
    type:String,
    reuired:true  
 },
 password:{
    type:String,
    required:true
 }
});
const collection=new mongoose.model("user",LoginSchema)
module.exports=collection;
