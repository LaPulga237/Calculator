const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const historyRoutes = require('./routes/historyRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (local instance)
mongoose.connect('mongodb+srv://dieudonneonana30_db_user:jg39kpTkzhD536M6@cluster0.oih1jpt.mongodb.net/?appName=Cluster0', {
   
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/history', historyRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
