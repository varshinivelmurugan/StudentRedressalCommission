const Admin=require("./models/admin");
const admin=new Admin({
 email:'varshinivelmurugan2000@gmail.com',
 password:'1234'
});
const mongoose=require("mongoose");
admin.save().
then(result=>
    {
console.log(result);
    })
    .catch(err=>{
        console.log(err);
    });