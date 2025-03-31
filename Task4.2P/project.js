// project.js
const mongoose = require('mongoose');

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB for seeding!');
});

// Define Mongoose Schema & Model
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// Export Project model
module.exports = Project;
