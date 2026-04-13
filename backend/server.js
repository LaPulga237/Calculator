const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const historyRoutes = require('./routes/historyRoutes');

require('dotenv').config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL
}));
app.use(express.json());

// Connect to MongoDB (local instance)
mongoose.connect(process.env.Mongo_URI, {
   
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/history', historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
