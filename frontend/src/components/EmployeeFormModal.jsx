import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const ROLES = [
  'Frontend Developer',
  'Backend Developer',
  'Engineering Manager',
  'Product Designer',
  'Marketing Lead',
  'Sales Executive',
  'HR Business Partner',
];

const DEPARTMENTS = [
  'Engineering',
  'Design',
  'Marketing',
  'Sales',
  'Human Resources',
];

/**
 * using Material UI Dialog
 */
const EmployeeFormModal = ({ isOpen, onClose, onSubmit, employeeToEdit }) => {
    /*Tracking changes in form and form data*/ 
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Frontend Developer',
    department: 'Engineering',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (employeeToEdit) {
      setFormData(employeeToEdit);
    } else {
      setFormData({
        fullName: '',
        role: 'Frontend Developer',
        department: 'Engineering',
        email: '',
        phone: '',
      });
    }
  }, [employeeToEdit, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        style: { borderRadius: 16, padding: '8px' },
      }}
    >
      <DialogTitle sx={{ fontWeight: 700, fontSize: '18px', pb: 1 }}>
        {employeeToEdit ? 'Edit Employee' : 'Add Employee'}
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Full name
            </label>
            <TextField
              fullWidth
              size="small"
              name="fullName"
              placeholder="e.g. Ava Thompson"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role / Title Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Role / Title
            </label>
            <TextField
              select
              fullWidth
              size="small"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              {ROLES.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* Department Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Department
            </label>
            <TextField
              select
              fullWidth
              size="small"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              {DEPARTMENTS.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email
              </label>
              <TextField
                fullWidth
                size="small"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <TextField
                fullWidth
                size="small"
                name="phone"
                placeholder="555-0100"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </DialogContent>

        {/* Buttons */}
        <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          <Button
            onClick={onClose}
            sx={{ textTransform: 'none', color: '#4b5563', fontWeight: 500 }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: 'none',
              backgroundColor: '#4f46e5',
              fontWeight: 500,
              borderRadius: '8px',
              px: 3,
              '&:hover': { backgroundColor: '#4338ca' },
            }}
          >
            {employeeToEdit ? 'Save Changes' : 'Add employee'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EmployeeFormModal;