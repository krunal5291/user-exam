const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Render Signup Page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Handle Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Render Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    res.redirect('/home');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Render Home Page
router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;
