import React from 'react';
import SearchBar from './SearchBar';

/**
 * Header Component
 */
const Header = ({ totalCount, searchTerm, onSearchChange, onAddClick }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Employee Directory</h1>
        <p className="text-sm text-slate-500 mt-0.5">{totalCount} employees</p>
      </div>

      <div className="flex items-center gap-3">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
        
        <button
          onClick={onAddClick}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors whitespace-nowrap"
        >
          + Add Employee
        </button>
      </div>
    </div>
  );
};

export default Header;