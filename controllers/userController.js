const User=require("../models/userModel")


const CreateUser=async(req,res)=>{
    const email=req.body.email;
    const findUser=await User.findOne({email:email});
    if(!findUser){
        // create a new user
        const newUser=await User.create(req.body);
        res.json(newUser);
    }else {
        // user already exists
        res.json({
            message:"User Already Exists",
            success:false
        })
    }
};

module.exports={
    CreateUser
}