const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const CategorieModel = require('./model/Categorie.js');
const ProductModel = require('./model/Product.js');

mongoose.connect('mongodb://localhost:27017/appStocks?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// Read Categories
app.get('/categorie', async (req, res) => {
    CategorieModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    }).populate({ path: 'produit', select: ['libelle', 'stock'] });
});


app.get('/categorie/insert', async (req, res) => {
    const categorie = new CategorieModel({ nom: 'Categorie 2' });
    await categorie.save();
    res.send("categories inserted");
});

// Read Products
app.get('/produit', async (req, res) => {
    ProductModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
    //.populate({ path: 'categori_id', select: ['nom'] });
});



