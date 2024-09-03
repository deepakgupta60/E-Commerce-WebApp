const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/projdb').then(() => console.log('Connected to MongoDB!'));

const accountRoutes = require('./routes/accountRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Use routes
app.use('/api', accountRoutes);
app.use('/api', categoryRoutes);

// Start server
app.listen(9000, () => {
    console.log("Server is running")
});
