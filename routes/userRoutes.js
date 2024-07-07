const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } = require('../controllers/userController');
const { validateUserData } = require('../Middleware/validation');

router.post('/users', validateUserData, createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);

module.exports = router;
