const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    libelle: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

const ProductModel = mongoose.model('produit', ProductSchema);
module.exports = ProductModel;