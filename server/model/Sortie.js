const mongoose = require('mongoose');

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
module.exports = SortieModel;