const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const historyRoutes = require('./routes/historyRoutes');

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

// Connect to MongoDB (local instance)
mongoose.connect(process.env.Mongo_URI, {
   
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/history', historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
