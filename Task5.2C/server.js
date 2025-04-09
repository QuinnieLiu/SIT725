const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests) 
app.use(express.json());
// Serve static files from the "public" folder 
app.use(express.static(path.join(__dirname, 'public')));
// parse URL to req.body
app.use(express.urlencoded({ extended: false }));


// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB for seeding!');
});

// REST API route
// app.get('/api/projects', async (req, res) => {
//   const projects = await Project.find({});
//   res.json({
//     statusCode: 200,
//     data: projects,
//     message: "Success"
//   });
// });

// import model in project.js 
const projectRoutes = require('./routes/project');
app.use('/api/project', projectRoutes);

// Add server listen call
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
