import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Product = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    description: { type: String, default: "Not Available" },
    category: { type: String },
    vendorName: { type: String, required: true },
    image: { type: [String] },
    discount: {
        applied: Boolean,
        disc: Number

    },
    costPrice: { type: Number, required: true },


})

const ProductQuantity = new Schema({
    productId: { type: ObjectId, required: true },
    hasVariant: { type: Boolean },
    variantType: { type: String, default: "Null" },
    quantity: { type: [Object] },
    total: { type: Number }

})


const ProductModel = mongoose.model('products', Product)
const ProductQuantityModel= mongoose.model('product-quantity',ProductQuantity)



export { ProductModel, ProductQuantityModel}