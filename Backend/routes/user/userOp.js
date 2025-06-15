import express from 'express';
import bcrypt from 'bcrypt';
import { UserOrderHistoryModel, UserCustomizeModel } from '../../models/userModel.js';
import userAuth from '../../middlewares/userauth.js';


const app = express.Router();

app.post('/confirmOrder', userAuth, async (req, res) => {
    const orderDetails = req.body;


    try {
        const userOrderHistory = await UserOrderHistoryModel.findOne({ userID: req.userId });
        if (!userOrderHistory) {
            return res.status(404).json({
                success: false,
                message: "User order history not found"
            });
        }
        userOrderHistory.orderHistory.push(orderDetails);
        await userOrderHistory.save();
        res.json({
            success: true,
            message: "Order confirmed successfully",
            orderDetails: orderDetails
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error confirming order",
            error: err.message
        });
    }
})

app.post('/customize', userAuth, async (req, res) => {
    const custmizeDetails = req.body;
    try {
        const existingCustomization = await UserCustomizeModel.findOne({
            userId: req.userId,
            "customization.prodId": custmizeDetails.customization.prodId,
            "customization.variant": custmizeDetails.customization.variant,
            "customization.subVariant": custmizeDetails.customization.subVariant,
            "customization.color.name": custmizeDetails.customization.color.name,
        });


        if (existingCustomization) {
            return res.status(400).json({
                success: false,
                message: "Customization for this product already exists"
            });
        }

        const newCustomization = await UserCustomizeModel.create({
            userId: req.userId,
            prodId: custmizeDetails.prodId,
            customization: custmizeDetails.customization
        });
        res.json({
            success: true,
            message: "Customization saved successfully",
            customization: newCustomization
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error saving customization",
            error: err.message
        });
    }
})


app.get('/getCustomizations', userAuth, async (req, res) => {
    const userId = req.userId;

    try {
        const customizations = await UserCustomizeModel.find({ userId: userId });
        if (customizations.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No customizations found for this user"
            });
        }
        res.json({
            success: true,
            customizations: customizations
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching customizations",
            error: err.message
        });
    }
})

app.get('/getOrderHistory', userAuth, async (req, res) => {
    const userId = req.userId;

    try {
        const userOrderHistory = await UserOrderHistoryModel.findOne({ userID: userId });
        if (!userOrderHistory) {
            return res.status(404).json({
                success: false,
                message: "User order history not found"
            });
        }
        res.json({
            success: true,
            orderHistory: userOrderHistory.orderHistory
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching order history",
            error: err.message
        });
    }
})

export default app;