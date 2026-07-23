/**
 * @file Employee.js
 * @description schema and model definition
 */

const mongoose = require('mongoose');


const ALLOWED_ROLES = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Engineering Manager',
  'Product Designer',
  'Marketing Lead',
  'Sales Executive',
  'HR Specialist',
  'DevOps Engineer',
];


const ALLOWED_DEPARTMENTS = [
  'Engineering',
  'Design',
  'Marketing',
  'Sales',
  'Human Resources',
  'Operations',
];


const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Employee full name is required'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Role / Title is required'],
      enum: {
        values: ALLOWED_ROLES,
        message: '{VALUE} is not a valid role',
      },
      trim: true,
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      enum: {
        values: ALLOWED_DEPARTMENTS,
        message: '{VALUE} is not a valid department',
      },
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Employee email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
  },
  {
   
    timestamps: true,
  }
);

module.exports = {
  Employee: mongoose.model('Employee', employeeSchema),
  ALLOWED_ROLES,
  ALLOWED_DEPARTMENTS,
};