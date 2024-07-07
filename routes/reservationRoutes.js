const express = require('express');
const router = express.Router();
const { createReservation, getAllReservations, deleteReservation, updateReservation, getReservationById } = require('../controllers/reservationController');

router.post('/reservations', createReservation);
router.get('/reservations', getAllReservations);
router.delete('/reservations/:id', deleteReservation);
router.put('/reservations/:id', updateReservation);
router.get('/reservations/:id', getReservationById);

module.exports = router;
