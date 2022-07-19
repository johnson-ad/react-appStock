const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
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
        // validate verifies if the email is valid
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

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;