const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  Date: { type: Date, required: true },
  Time: { type: String, required: true },
  Salle: { type: mongoose.Schema.Types.ObjectId, ref: 'Salle', required: false },
  Status: { type: Number, default: false },
  Comment: { type: String },
  SalleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Salle', required: false },
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  User: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
});


const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
