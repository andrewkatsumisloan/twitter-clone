import React from 'react'
import SearchBar from '../../SearchBar/SearchBar'
import SuggestionsBar from '../../SuggestionsBar/SuggestionsBar'

import './SideBarRight.scss'

const SideBarRight = () => {
  return (
    <div className='sb-right'>
        <SearchBar />
        <SuggestionsBar />
    </div>
  )
}

export default SideBarRight