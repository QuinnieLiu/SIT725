const mongoose = require('mongoose');

// Define Mongoose Schema & Model
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('projectTable', ProjectSchema);

module.exports = Project;
