const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const CategorieModel = require('./model/Categorie');
const ProduitModel = require('./model/Product');

mongoose.connect('mongodb+srv://Johnson:4otaeV4fItFK4yve@categories.xkjc8.mongodb.net/appStocks?retryWrites=true&w=majority', { useNewUrlParser: true });

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
    })
});

//Insert Categories
app.get('/categorie/insert', async (req, res) => {
    const categorie = new CategorieModel({ nom: "Johnson" });
    await categorie.save();
    res.send('Categorie inserted');
});


