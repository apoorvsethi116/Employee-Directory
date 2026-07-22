const express = require('express');
const router = express.Router();

const {
  getEmployees,
  createEmployee,
  updateEmployee,
} = require('../controllers/employeeController');

/**
 * getting all employees and creating a new employee
 * Endpoint: /api/employees
 */
router.route('/')
  .get(getEmployees)
  .post(createEmployee);

/**
 * Route for updating an employee by ID
 * Endpoint: /api/employees/:id
 */
router.route('/:id')
  .put(updateEmployee);

module.exports = router;