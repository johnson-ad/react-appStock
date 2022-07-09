const mongoose = require('mongoose');

const CategorieSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    }
});

const CategorieModel = mongoose.model('categories', CategorieSchema);
module.exports = CategorieModel;