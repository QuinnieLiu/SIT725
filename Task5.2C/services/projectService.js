const Project = require('../models/project');

// Service to get all projects
exports.getAllProjects = async () => {
  try {
    const projects = await Project.find();
    return projects;
  } catch (err) {
    throw new Error('Error fetching projects: ' + err.message);
  }
};

// Service to insert sample projects
exports.insertSampleProjects = async () => {
  const projectsData = [
    {
      title: "pig",
      image: "images/pig-dog-2613125_1280.jpg",
      link: "About this pig",
      description: "Demo description about pig"
    },
    {
      title: "Puppy",
      image: "images/puppy-1047521_1280.jpg",
      link: "About this puppy",
      description: "Demo description about puppy"
    },
    {
      title: "Cat",
      image: "images/ai-generated-8359510_1280",
      link: "About this cat",
      description: "Demo description about cat"
    }
  ];

  try {
    await Project.insertMany(projectsData);
    console.log("Sample projects saved!");
  } catch (err) {
    throw new Error('Error inserting sample projects: ' + err.message);
  }
};
