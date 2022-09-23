import React from 'react'

import './SideBarLeftItem.scss'

const SideBarLeftItem = ( props ) => {
  return (
    <div className='sb-left-item'>
        <p> {props.itemName} </p>
    </div>
  )
}

export default SideBarLeftItem