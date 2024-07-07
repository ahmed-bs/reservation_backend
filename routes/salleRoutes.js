const express = require('express');
const router = express.Router();
const { createSalle, getAllSalles, deleteSalle, updateSalle, getSalleById } = require('../controllers/salleController');

router.post('/salles', createSalle);
router.get('/salles', getAllSalles);
router.delete('/salles/:id', deleteSalle);
router.put('/salles/:id', updateSalle);
router.get('/salles/:id', getSalleById);

module.exports = router;
