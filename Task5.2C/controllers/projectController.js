const projectService = require('../services/projectService');

// Controller to get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json({
      status: 'success',
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Controller to insert sample projects
exports.insertSampleProjects = async (req, res) => {
  try {
    await projectService.insertSampleProjects();
    res.status(200).json({
      status: 'success',
      message: 'Sample projects inserted successfully!',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
