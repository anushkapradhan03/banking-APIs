const mongoose = require("mongoose");
const connect = (url)=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
    console.log(err)
    })

}
module.exports=connect;