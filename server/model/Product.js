const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // categori_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'categories'
    // },
    libelle: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

const ProductModel = mongoose.model('produits', ProductSchema);
module.exports = ProductModel;