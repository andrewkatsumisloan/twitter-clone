import React from 'react'

import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='search-box'>
        <input className='search-bar' type="text" placeholder="Search" />
    </div>
  )
}

export default SearchBar