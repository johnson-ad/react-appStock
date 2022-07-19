const express = require('express');
const app = express();
const mongoose = require('mongoose');
const validator = require('validator');

// mongoose.connect(`mongodb://localhost:27017/testdb`).then(() => {
//     console.log('Connected to MongoDB');
// });

mongoose.connect('mongodb://localhost:27017/testdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        //validate verifies if the email is valid
        validate: (value) => {
            return validator.isEmail(value);
        }
    },
    firstName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// pre-save  is a middleware that is executed before the document is saved
UserSchema.pre('save', (next) => {
    console.log('User is about to be saved');
    next();
});

//creating model
const User = mongoose.model('emails', UserSchema);

// const user = new User({
//     email: 'test4@gmail.com',
//     firstName: 'test',
//     password: 'test'
// });

// user.save().then((doc) => {
//     console.log(doc);
// }).catch((err) => {
//     console.log(err);
// });


//find all users
// user.find().then((doc) => {
//     console.log(doc);
// });

//find one user
// user.find({
//     email: 'test@gmail.com'
// }).then((doc) => {
//     console.log(doc);
// });

// find and update
// user.findOneAndUpdate(
//     { email: 'test@gmail.com' },
//     { email: 'test2@gmail.com' },
//     { new: true }
// ).then((doc) => {
//     console.log(doc);
// });


// app.get('/', async (req, res) => {
/*
sort : permet le trie des donnees, 
select : permet de selectionner les donnees cibler
limit : permet de limiter le nombre de donnees a afficher
skip : permet de sauter des donnees pour afficher les autres
*/
// const user = await User.find({}).sort({ firstName: 1 }).select({ firstName: 1 }).limit(1);
//     const user = await User.find({});
//     res.json(user);

// });

// app.get('/add', async (req, res) => {

//     const users = new User({ email: 'test3@gmail.com', firstName: 'test2', password: 'test2' });
//     await users.save();
//     res.send("user inserted");
// });




const { Customer, Indentifier } = require('./models');

async function showIdentifier() {
    //populate permet d'affiche les donnees de la table customer
    //on utilise populate kon fait un join entre les tables a travers mongoose.Schema.Types.ObjectId
    // const identifier = await Indentifier.find().populate('customer');
    const identifier = await Indentifier.find();
    return identifier;
}

async function createCustomer(name, age, gender) {
    const customer = new Customer({
        name, age, gender
    })
    return await customer.save();
}

async function creatIdentifier(code, customer) {
    const identifier = new Indentifier({
        customerCode: code,
        customer
    })
    return await identifier.save();
}

createCustomer('test', 23, 'male').then((customer) => {
    console.log('customer created...')
    return creatIdentifier(customer._id.toString().substring(0, 10).toUpperCase(), customer)
}).then(() => {
    console.log('identfier created....');
    return showIdentifier();
}).then((data) => {
    console.log(data);
})