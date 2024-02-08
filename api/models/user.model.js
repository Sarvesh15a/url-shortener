import mongoose  from "mongoose";
const userSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true,
       unique: true,
   },
   email:{
       type: String,
       required: true,
       unique: true,
   },
   password:{
       type: String,
       required:true,
   },
   
  longURL :{type:String },
    shortURL:{type:String },
  visitHistory: [{ timestamp: { type: Number } }],
   }, 
   {timestamps: true}
   
);

const User = mongoose.model('User', userSchema);

export default User;