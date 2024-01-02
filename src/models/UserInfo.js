import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema({
    email:{type:String,required:true},
    phone: { type: String },
  streetAddress: { type: String },
  city: { type: String },
  postalCode: { type: String },
  country: { type: String },
  admin:{type:Boolean,default:false},
},{timestamps:true})

const UserInfo = mongoose.models?.UserInfo || mongoose.model('UserInfo', UserInfoSchema)

export default UserInfo;