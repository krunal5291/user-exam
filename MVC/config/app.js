const express = require('express');
const connectDB = require('.db');
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
