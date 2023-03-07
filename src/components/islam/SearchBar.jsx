import React from 'react';
import './Islam.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <i class="uil uil-search search-icon"></i>
      <input
        type='text'
        placeholder='ค้นหาหัวข้อ - Search By Title'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;