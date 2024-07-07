const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const salleRoutes = require('./routes/salleRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const cors = require('cors');
const app = express();
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/reservation', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', salleRoutes);
app.use('/api', reservationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));