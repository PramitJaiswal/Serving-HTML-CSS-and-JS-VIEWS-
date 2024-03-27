const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <link rel="stylesheet" href="/styles/style.css">
        </head>
        <body>
            <h1>Welcome to our website!</h1>
            <a href="/shop"><img src="/images/shop-icon.png" alt="Shop Icon">Shop</a>
            <a href="/contactus"><img src="/images/contact-icon.png" alt="Contact Icon">Contact Us</a>
        </body>
        </html>
    `);
});

// New route for contact form
app.use('/contactus', contactUsRoutes);

// Route for displaying success message
app.get('/success', (req, res) => {
    res.send('Form successfully filled');
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
