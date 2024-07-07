const mongoose = require('mongoose');

const salleSchema = new mongoose.Schema({
  SalleName: { type: String, required: true },
  SalleNumber: { type: Number, required: true, unique: true },
  // capacite: { type: Number, required: true },
  // equipements: { type: [String], required: true },
  // disponibilites: { 
  //   type: [{
  //     day: { 
  //       type: Date, 
  //       required: true
  //     },
  //     startTime: { type: String, required: true },
  //     endTime: { type: String, required: true }
  //   }],
  //   required: true
  // }
});
const Salle = mongoose.model('Salle', salleSchema);

module.exports = Salle;