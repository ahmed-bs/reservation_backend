const Reservation = require('../models/Reservation');

const Salle = require('../models/salle');
const User = require('../models/user');

const createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    
    for (const reservation of reservations) {
      const user = await User.findById(reservation.UserId);
      const salle = await Salle.findById(reservation.SalleId);
      
      reservation.User = user;
      reservation.Salle = salle;
    }

    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json({ message: 'Reservation deleted successfully', reservation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReservation = await Reservation.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(updatedReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createReservation, getAllReservations, deleteReservation, updateReservation, getReservationById };
