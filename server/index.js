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

// section show functon
async function showUsers() {
    return await UserModel.find().populate('role');
}

//section declare function
createRole('admin').then((role) => {
    console.log('role created...');
    const user = new UserModel({ role: role, nom: 'admin', prenom: 'admin', email: 'admin@gmail.com', password: 'admin' });
    return user.save().then(() => {
        console.log('first user created...');
        showUsers();
    })
});

