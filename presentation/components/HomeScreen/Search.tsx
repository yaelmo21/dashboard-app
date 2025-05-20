import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <button>
      <FaSearch
        className='h-4 w-4 text-muted hover:text-gray-700 transition duration-150 ease-in-out'
        aria-hidden='true'
      />
    </button>
  );
};

export default Search;
