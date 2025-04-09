// Import the service
const foodService = require('../services/foodService');

// Controller uses the service to get data
exports.getAllFood = (req, res) => {
  const items = foodService.getAllFood();
  res.json({
    status: 200,
    data: items,
    message: 'Food menu retrieved using service'
  });
};