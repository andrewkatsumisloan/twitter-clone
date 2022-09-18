import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideBarLeftItem from './SideBarLeftItem'

import './SideBarLeft.scss'

const SideBarLeft = () => {
    return (
        <div className='sb-left'>
            <div className='app-logo'> 
                LOGO
            </div>
            <Link> </Link>
            <SideBarLeftItem itemName='Home' />
            <SideBarLeftItem itemName='Explore' />
            <SideBarLeftItem itemName='Notifications' />
            <SideBarLeftItem itemName='Messages' />
            <SideBarLeftItem itemName='Bookmarks' />
            <SideBarLeftItem itemName='Lists' />
            <SideBarLeftItem itemName='Profile' />
            <SideBarLeftItem itemName='More' />
            <button className='post'> Post </button>
        </div>
    )
}

export default SideBarLeft