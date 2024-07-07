const Salle = require('../models/salle');

const createSalle = async (req, res) => {
  try {
    const newSalle = new Salle(req.body);
    await newSalle.save();
    res.status(201).json(newSalle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSalles = async (req, res) => {
  try {
    const salles = await Salle.find();
    res.json(salles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSalle = async (req, res) => {
  try {
    const salle = await Salle.findByIdAndDelete(req.params.id);
    if (!salle) {
      return res.status(404).json({ message: 'Salle not found' });
    }
    res.json({ message: 'Salle deleted successfully', salle });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSalle = await Salle.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSalle) {
      return res.status(404).json({ message: 'Salle not found' });
    }
    res.json(updatedSalle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSalleById = async (req, res) => {
  try {
    const { id } = req.params;
    const salle = await Salle.findById(id);
    if (!salle) {
      return res.status(404).json({ message: 'Salle not found' });
    }
    res.json(salle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSalle, getAllSalles, deleteSalle, updateSalle, getSalleById };
