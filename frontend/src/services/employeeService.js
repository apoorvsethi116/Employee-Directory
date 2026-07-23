import axios from 'axios';

// Base backend API endpoint
const API_URL = 'https://employee-directory-fdlc.onrender.com';

/**
 * Fetches all employees from MongoDB
 * @returns {Promise<Array>} List of employees
 */
export const fetchEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

/**
 * Creates a new employee entry
 * @param {Object} employeeData - Form data object
 * @returns {Promise<Object>} Saved employee object
 */
export const createEmployee = async (employeeData) => {
  const response = await axios.post(API_URL, employeeData);
  return response.data;
};

/**
 * Updates an existing employee entry by ID
 * @param {string} id - Employee Mongo ID
 * @param {Object} employeeData - Form data object
 * @returns {Promise<Object>} Updated employee object
 */
export const updateEmployee = async (id, employeeData) => {
  const response = await axios.put(`${API_URL}/${id}`, employeeData);
  return response.data;
};

/**
 * Deletes an existing employee entry by ID
 * @param {string} id - Employee Mongo ID
 * @returns {Promise<Object>} Delete response
 */
export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};