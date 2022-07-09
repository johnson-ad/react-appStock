const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    }
});

const RoleModel = mongoose.model('role', RoleSchema);
module.exports = RoleModel;