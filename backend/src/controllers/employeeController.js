const { Employee } = require('../models/Employee');

/**
 * Fetch all employees from MongoDB
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getEmployees = async (req, res) => {
  try {
    // It will sort employees according to the date they were created
    const employees = await Employee.find().sort({ createdAt: -1 });
    
    
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching employees' });
  }
};

/**
 * Add a new employee to MongoDB
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const createEmployee = async (req, res) => {
  try {
    // Save new employee sent from the React form
    const newEmployee = await Employee.create(req.body);
    res.json(newEmployee);
  } catch (error) {
    res.json({ message: 'Failed to create employee', error: error.message });
  }
};

/**
 * Edit / Update an existing employee in MongoDB
 * @param {Object} req - Express request containing employee ID in params
 * @param {Object} res - Express response
 */
const updateEmployee = async (req, res) => {
  try {
    // Find employee by ID and update with new form values
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // { new: true } returns updated doc
    );

    if (!updatedEmployee) {
      return res.json({ message: 'Employee not found' });
    }

    res.json(updatedEmployee);
  } catch (error) {
    res.json(error);
  }
};

/**
 * Delete an existing employee in MongoDB
 * @param {Object} req - Express request containing employee ID in params
 * @param {Object} res - Express response
 */
const deleteEmployee = async (req, res) => {
  try {
    // Find employee by ID and remove it from MongoDB
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.json({ message: 'Employee not found' });
    }

    res.json({ message: 'Employee deleted successfully', deletedEmployee });
  } catch (error) {
    res.json(error);
  }
};



module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};