const mongoose = require ('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    salario: Number,
    approved: Boolean,
})

module.exports = Person