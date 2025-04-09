const express = require('express');
const app = express();
const PORT = 3000;

// Import route file
const foodRoutes = require('./routes/food');

// Mount the route at /api/food
app.use('/api/food', foodRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Food Menu Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

