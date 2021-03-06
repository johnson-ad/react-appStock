const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const { UserModel, CategorieModel, ProductModel, RoleModel, EntreeModel, SortieModel } = require('./model/model');

mongoose.connect('mongodb://localhost:27017/testdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// section create functon
async function createRole(nom) {
    const role = new RoleModel({ nom });
    return await role.save();
}

async function createUser(role, nom, prenom, email, password) {
    const user = new UserModel({ role, nom, prenom, email, password });
    return await user.save();
}


async function createEntree(quatite, prix, date) {
    const entree = new EntreeModel({ quatite, prix, date });
    return await entree.save();
}

async function createSortie(quatite, prix, date) {
    const sortie = new SortieModel({ quatite, prix, date });
    return await sortie.save();
}

async function createProduct(categorie, libelle, stock, entree, sortie) {
    const product = new ProductModel({ categorie, libelle, stock, entree, sortie });
    return await product.save();
};

async function createCategorie(nom) {
    const categorie = new CategorieModel({ nom });
    return await categorie.save();
}



// section show functon
async function showUsers() {
    return await UserModel.find().populate('role');
}

async function showProducts() {
    return await ProductModel.find();
}

async function showCategories() {
    return await CategorieModel.find();
}

async function showEntrees() {
    return await EntreeModel.find();
}

async function showSorties() {
    return await SortieModel.find();
}

//section declare function
// createRole('admin').then((role) => {
//     console.log('role created...');
//     const user = new UserModel({ role: role, nom: 'admin', prenom: 'admin', email: 'admin@gmail.com', password: 'admin' });
//     return user.save().then(() => {
//         console.log('first user created...');
//         showUsers();
//     })
// });

createCategorie('Pc portable').then((categorie) => {
    console.log('first categorie created...');
    // showCategories();
    const entree = new EntreeModel({ quatite: 60, prix: 1800, date: new Date(Date.now()) });
    return entree.save().then(() => {
        console.log('first entree created...');
        // showEntrees();
        const sortie = new SortieModel({ quatite: 3, prix: 1500, date: new Date(Date.now()) });
        return sortie.save().then((entree) => {
            console.log('first sortie created...');
            // showSorties();
            const product = new ProductModel({ categorie: categorie, libelle: 'MacBook Air', stock: 100, entree: entree, sortie: sortie });
            return product.save().then(() => {
                console.log('first product created...');
                showProducts();
            })
        })
    })
});
    // const produit = new ProductModel({ categorie: categorie, libelle: 'MacBook Pro', stock: 120 });
    // return produit.save().then(() => {
    //     console.log('first product created...');
    //     showProducts();
    // }).then(() => {
    //     return createEntree(10, 1000, new Date(Date.now())).then((entree) => {
