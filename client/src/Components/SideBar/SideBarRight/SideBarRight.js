import React from 'react'
import SearchBar from '../../SearchBar/SearchBar'
import SuggestionsBar from '../../SuggestionsBar/SuggestionsBar'
import StatsComponent from './StatsComponent/StatsComponent'

import './SideBarRight.scss'

const SideBarRight = () => {
  return (
    <div className='sb-right'>
      <SearchBar />
      <StatsComponent />
      <SuggestionsBar />
    </div>
  )
}

export default SideBarRight