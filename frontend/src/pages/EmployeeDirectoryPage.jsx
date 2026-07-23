import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import EmployeeCard from '../components/EmployeeCard';
import EmployeeFormModal from '../components/EmployeeFormModal';
import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee } from '../services/employeeService';

/**
 * EmployeeDirectoryPage main view
 */
const EmployeeDirectoryPage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Failed to load employees:', error);
    }
  };

  const handleOpenAddModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (selectedEmployee) {
        await updateEmployee(selectedEmployee._id, formData);
      } else {
        await createEmployee(formData);
      }
      setIsModalOpen(false);
      loadEmployees();
    } catch (error) {
      alert(error.response?.data?.message || 'Error processing request');
    }
  };

  const handleDeleteEmployee = async (employee) => {
    const shouldDelete = window.confirm(`Delete ${employee.fullName}?`);

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteEmployee(employee._id);
      loadEmployees();
    } catch (error) {
      alert(error.response?.data?.message || 'Error deleting employee');
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    const query = searchTerm.toLowerCase().trim();
    return (
      emp.fullName?.toLowerCase().includes(query) ||
      emp.department?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <Header
          totalCount={filteredEmployees.length}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onAddClick={handleOpenAddModal}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee._id}
              employee={employee}
              onEdit={handleOpenEditModal}
              onDelete={handleDeleteEmployee}
            />
          ))}
        </div>

        <EmployeeFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          employeeToEdit={selectedEmployee}
        />
      </div>
    </div>
  );
};

export default EmployeeDirectoryPage;