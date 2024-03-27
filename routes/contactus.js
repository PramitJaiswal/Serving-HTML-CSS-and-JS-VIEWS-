const express = require('express');
const router = express.Router();
const path = require('path');

// Route for contactus page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'contactus.html'));
});

// Route for handling form submission
router.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // Handle form submission here, you can save the data to a database or perform other actions

    // Redirect to success page
    res.redirect('/success');
});

module.exports = router;
