const {default:mongoose}=require('mongoose')
const url="mongodb://0.0.0.0:27017/shopping_app";
const dbConnect =()=>{
    try{
        const conn=mongoose.connect(url,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('Databse connected succesffully');
    }catch(error){
        console.log("Database error");
    }

}

module.exports = dbConnect;