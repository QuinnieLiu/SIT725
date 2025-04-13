const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests) 
app.use(express.json());

// Serve static files from the "public" folder 
app.use(express.static(path.join(__dirname, 'public')));


app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
        return res.status(400).send("Error: Please provide a valid num1 using query parameter");
    } else if (isNaN(num2)){
        return res.status(400).send("Error: Please provide a valid num2 using query parameter");
    }
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});



// Add server listen call
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
