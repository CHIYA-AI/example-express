// Import express library
const express = require('express');

// Create an instance of express
const app = express();

// Define the port number
const PORT = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Selamat datang di halaman beranda!');
});

// Define a route for the API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Ini adalah response JSON dari /api.' });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
