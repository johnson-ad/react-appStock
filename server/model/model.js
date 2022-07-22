const mongoose = require('mongoose');
const validator = require('validator');

const CategorieSchema = new mongoose.Schema({
    nom: String
});

const CategorieModel = mongoose.model('categories', CategorieSchema);

const EntreeSchema = new mongoose.Schema({
    quatite: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const EntreeModel = mongoose.model('entree', EntreeSchema);

const SortieSchema = new mongoose.Schema({
    quatite: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const SortieModel = mongoose.model('sortie', SortieSchema);

const ProductSchema = new mongoose.Schema({
    categorie: CategorieSchema,
    libelle: {
        type: String,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    },
    entree: EntreeSchema,
    sortie: SortieSchema,
});

const ProductModel = mongoose.model('produits', ProductSchema);

const RoleSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    }
});

const RoleModel = mongoose.model('role', RoleSchema);

const UserSchema = new mongoose.Schema({
    role: RoleSchema,
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //validate verifies if the email is valid
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email');
            }
        }
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = { UserModel, CategorieModel, ProductModel, RoleModel, EntreeModel, SortieModel };