const {default:mongoose}=require('mongoose')

const dbConnect =()=>{
    try{
        const conn=mongoose.connect('mongodb://localhost:27017/shopping_app') ;
        console.log('Databse connected succesffully');
    }catch(error){
        console.log("Database error");
    }

}

module.exports =dbConnect;