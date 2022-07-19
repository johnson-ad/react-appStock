const mongoose = require('mongoose');
const ProductModel = require('./Product.js');
// const ProductModel = mongoose.model('./Product.js');

const CategorieSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    }
    ,
    produit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel'
    }
});
/*
une autre maniere de creer un schema juste apres la fermerture des crochets on ajoute :
,{collection: 'categories'} ); //cella va cree automatiqument une collection categories dans la base de donnees

et si on veut exporter on a ka faire:
const CategorieModel = mongoose.model(CategorieSchema);
*/

const CategorieModel = mongoose.model('categories', CategorieSchema);
module.exports = CategorieModel;
