const express = require('express'); 
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests) 
app.use(express.json());
// Serve static files from the "public" folder 
app.use(express.static(path.join(__dirname, 'public')));
// parse URL to req.body
app.use(express.urlencoded({ extended: false }));

// Add server listen call
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
