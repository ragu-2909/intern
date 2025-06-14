import express from 'express';
import { ProductModel, ProductQuantityModel } from '../models/productmodel.js';

const router = express.Router();

router.get('/products', async function (req, res) {
    try {

        const products = await ProductModel.find();
        const productQuantities = await ProductQuantityModel.find();

        const productsWithQuantities = products.map(product => {

            const productQuantity = productQuantities.find(
                (quantity) => quantity.productId.toString() === product._id.toString()
            );


            if (productQuantity) {
                return {
                    ...product.toObject(),
                    hasVariant: productQuantity.hasVariant,
                    variantType: productQuantity.variantType,
                    quantity: productQuantity.quantity,
                    total: productQuantity.total,

                };
            } else {

                return product.toObject();
            }
        });

        res.json({
            success: true,
            data: productsWithQuantities
        });

    } catch (error) {
        // Handle any errors
        res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving products',
            error: error.message
        });
    }
});
router.get('/product/:productId', async function (req, res) {
    try {
        const product = await ProductModel.findOne({
            _id: req.params.productId,
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        const productQuantity = await ProductQuantityModel.findOne({
            productId: product._id,
        });

        let responseData = product.toObject();

        if (productQuantity) {
            responseData = {
                ...responseData,
                hasVariant: productQuantity.hasVariant,
                variantType: productQuantity.variantType,
                quantity: productQuantity.quantity,
                total: productQuantity.total,
            };
        }

        res.status(200).json({
            success: true,
            message: "Product found - check data",
            data: responseData,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving the product",
            error: err.message,
        });
    }
});



export default router;
