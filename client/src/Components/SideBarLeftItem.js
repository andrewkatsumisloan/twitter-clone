import React from 'react'

import './SideBarLeftItem.scss'

const SideBarLeftItem = ( props ) => {
  return (
    <div className='sb-left-item'>
        <h4> {props.itemName} </h4>
    </div>
  )
}

export default SideBarLeftItem