import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

/**
 * SearchBar component using Material UI TextField
 * @param {string} searchTerm - Input search query
 * @param {Function} onSearchChange - Text change callback
 */
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      size="small"
      placeholder="Search by name or department"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      sx={{ width: 300, backgroundColor: 'white' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: '#9ca3af', fontSize: 20 }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;