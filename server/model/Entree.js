const mongoose = require('mongoose');

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
module.exports = EntreeModel;