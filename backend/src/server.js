const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');


const app = express();

// Connect to MongoDB database
connectDB();

// Middleware
app.use(cors()); 
app.use(express.json());

// Mount Employee routes under /api/employees
app.use('/api/employees', employeeRoutes);

// test route
app.get('/health', (req, res) => {
  res.send('Server is up and running');
});

// port on which we will be live , default set to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});