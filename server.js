// server.js

const express = require('express');
const app = express();
const port = 3005;

// Route to respond with current date and time
app.get('/', (req, res) => {
    const currentDateTime = new Date();
    res.json({
        date: currentDateTime.toDateString(),
        time: currentDateTime.toTimeString()
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
