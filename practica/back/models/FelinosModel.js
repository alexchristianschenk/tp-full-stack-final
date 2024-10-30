const mongoose = require('mongoose');

const perroSchema = new mongoose.Schema({
  raza: { type: String, required: true },
  alimento: { type: String, required: true },
  estado_natural: { type: String, required: true },
});

module.exports = mongoose.model('Perro', perroSchema);
