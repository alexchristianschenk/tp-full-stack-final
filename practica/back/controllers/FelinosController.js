// const mongoose = require('mongoose');
const Perro = require('../models/FelinosModel');

// Obtener todos los hechizos
exports.getPerros = async (req, res) => {
  try {
    const perros = await Perro.find();
    res.json(perros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // Obtener un hechizo por ID
// exports.getHechizoById = async (req, res) => {
//   try {
//     const hechizo = await Hechizo.findById(req.params.id);
//     if (hechizo) {
//       res.json(hechizo);
//     } else {
//       res.status(404).json({ message: 'Hechizo no encontrado' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// Crear un nuevo hechizo
exports.createPerro = async (req, res) => {
  const perro = new Perro({
    raza: req.body.raza,
    alimento: req.body.alimento,
    estado_natural: req.body.estado_natural,
  });
  try {
    const nuevoPerro = await perro.save();
    res.status(201).json(nuevoPerro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// // Actualizar un hechizo por ID
// exports.updateHechizo = async (req, res) => {
//   try {
//     const hechizo = await Hechizo.findById(req.params.id);
//     if (hechizo) {
//       hechizo.nombre = req.body.nombre || hechizo.nombre;
//       hechizo.descripcion = req.body.descripcion || hechizo.descripcion;
//       hechizo.nivel = req.body.nivel || hechizo.nivel;
      
//       const hechizoActualizado = await hechizo.save();
//       res.json(hechizoActualizado);
//     } else {
//       res.status(404).json({ message: 'Hechizo no encontrado' });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // Eliminar un hechizo por ID
// exports.deleteHechizo = async (req, res) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     return res.status(400).json({ message: 'ID no válido' });
//   }

//   try {
//     const hechizo = await Hechizo.findById(req.params.id);
//     if (hechizo) {
//       await hechizo.deleteOne();
//       res.json({ message: 'Hechizo eliminado' });
//     } else {
//       res.status(404).json({ message: 'Hechizo no encontrado' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };