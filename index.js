// Configuraçao do servidor
const express = require ('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');

// Forma de ler JSON com middleware express

app.use (
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

const personRoutes = require('./routes/personRoutes.js')

app.use('/person', personRoutes)

// Rota teste 
app.get('/', (req ,res) =>  {

res.json({message: 'oi Express'})

});
//mongodb+srv://enzzo:enzzo@apicluster.ujpux3p.mongodb.net/bancodaapi?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://enzzo:enzzo@apicluster.ujpux3p.mongodb.net/bancodaapi?retryWrites=true&w=majority')
.then(() => {
    console.log("Conectamos ao mongoDB")
    app.listen (3000, (req, res) => {
        console.log("Servidor rodando na porta")
    });
})
.catch((err) => console.log(err))

