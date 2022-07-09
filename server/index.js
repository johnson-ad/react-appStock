const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const CategorieModel = require('./models/Categorie');

mongoose.connect('mongodb+srv://Johnson:NduIJZ0a9oeNRbQi@appstock.ltfbo.mongodb.net/appStock?retryWrites=true&w=majority', { useNewUrlParser: true });

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


//Add categorie
// app.post('/categorie/add', async (req, res) => {
//     // const name = req.body.name;
//     // const age = req.body.age;


//     const categorie = req.body;
//     const newCategorie = new CategorieModel(categorie);
//     await newCategorie.save();
//     res.json(newCategorie);
//     res.send("Ajout d'une nouvelle categorie");
// });

//Update categorie
// app.put('/categorie/update', async (req, res) => {

//     // const newAge = req.body.newAge;
//     // const id = req.body.id;

//     try {
//         // await CategorieModel.findById(id, (error, friendToUpdate) => {
//         //     friendToUpdate.age = Number(newAge);
//         //     friendToUpdate.save();
//         // })
//     } catch (err) {
//         console.log(err)
//     }
//     res.send("You are connected");

// });

//Delete categorie
// app.delete('/categorie/delete/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         await CategorieModel.findByIdAndRemove(id).exec();
//     } catch (err) {
//         console.log(err)
//     }
//     res.send("Item is deleted");
// });

