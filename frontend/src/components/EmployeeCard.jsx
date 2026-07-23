import React from 'react';

/**
 * Utility to extract user initials
 */
const getInitials = (name) => {
  if (!name) return 'EM';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

/**
 * Department badge color style helper
 */
const getBadgeStyles = (dept) => {
  switch (dept?.toLowerCase()) {
    case 'engineering':
      return 'bg-indigo-100 text-indigo-700';
    case 'design':
      return 'bg-purple-100 text-purple-700';
    case 'marketing':
      return 'bg-amber-100 text-amber-700';
    case 'human resources':
      return 'bg-pink-100 text-pink-700';
    case 'sales':
      return 'bg-emerald-100 text-emerald-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

/**
 * EmployeeCard Component
 */
const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const { fullName, role, department, email, phone } = employee;

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between items-start text-left w-full h-full">
      <div className="w-full">
        {/* Top Header: Avatar + Title */}
        <div className="flex items-center gap-3 mb-3 text-left">
          <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0">
            {getInitials(fullName)}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">
              {fullName}
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">{role}</p>
          </div>
        </div>

        {/* Department Badge */}
        <div className="mb-4 text-left">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getBadgeStyles(department)}`}>
            {department}
          </span>
        </div>

        {/* Contact Details */}
        <div className="text-xs text-gray-500 space-y-1 mb-4 text-left">
          <p className="truncate">{email}</p>
          <p>{phone}</p>
        </div>
      </div>

      <div className="w-full text-left pt-2">
        <button
          onClick={() => onEdit(employee)}
          className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(employee)}
          className="ml-2 px-3 py-1 text-xs font-medium text-white bg-red-500 hover:bg-red-600 border border-red-500 rounded transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;