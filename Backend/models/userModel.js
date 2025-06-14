import mongoose from "mongoose";
const ObjectId= mongoose.ObjectId;
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true}
})

const UserInfo = new Schema({
    userId: ObjectId,
    name: {type: String, require: true},
    address: {type: [Object], require: true},
    phoneNo: {type:String},
    image: {type: [String], default: ["https://res.cloudinary.com/dkngwqe98/image/upload/v1728192792/default-user-pic_w0patr.jpg"]}
})




const User_Order_history = new Schema ({
    userID: {type: ObjectId, required: true},
    orderHistory : {type: [Object]}
})


const UserModel= mongoose.model('users',User);
const UserInfoModel = mongoose.model('user-info',UserInfo)

const UserOrderHistoryModel = mongoose.model('user-orders', User_Order_history)

export { UserModel, UserInfoModel, UserOrderHistoryModel};
 