const mongoose = require('mongoose');
/*
Relationship
*/
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

const Customer = mongoose.model('cunstoner', customerSchema);


const identifierSchema = new mongoose.Schema({
    customerCode: String,
    customer: customerSchema
});

// const identifierSchema = new mongoose.Schema({
//     customerCode: String,
//     customer: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'cunstoner'
//     }
// });

const Indentifier = mongoose.model('indentifier', identifierSchema);

module.exports = { Customer, Indentifier };
