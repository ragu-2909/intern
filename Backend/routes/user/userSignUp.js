import express from 'express';
import bcrypt from 'bcryptjs';

import {UserInfoModel, UserModel, UserOrderHistoryModel} from '../../models/userModel.js'

const router = express.Router();

function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

router.post('/signup', async function(req, res){
    const { name, address,pincode, phoneNo, email, password } = req.body;
    
    let errorThrown = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await UserModel.create({
            email: email,
            password: hashedPassword
        });
       const addressarray=[];
       let addid = generateRandomId()
       let addressobj = {
        addressId: addid,
        address: address,
        pincode: pincode
       }
       addressarray.push(addressobj)
       
        await UserInfoModel.create({
            name: name,
            address: addressarray,
            phoneNo: phoneNo,
            userId: newUser._id,
            image: req.image_url 
        });

       

        await UserOrderHistoryModel.create({
            userID: newUser._id,
            orderHistory: []
        })

    } catch(err) {
        
        res.json({
            success: false,
            message: "user Already exists",
            error: err
        });
        errorThrown = true;
    }

    if (!errorThrown) {
        res.json({
            success: true,
            message: "Signup successful"
        });
    }
});

export default router;