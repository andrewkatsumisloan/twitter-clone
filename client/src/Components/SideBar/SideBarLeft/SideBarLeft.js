import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideBarLeftItem from './SideBarItem/SideBarLeftItem'
import ShibaLogo from '../../../Assets/shiba-logo.png'

import './SideBarLeft.scss'

const SideBarLeft = () => {
    return (
        <div className='sb-left'>
            <div className='app-logo'> 
                <img src={ShibaLogo} height='87.5px' width='70px' alt='Shiba Logo' />
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
            <button className='post-left-button'> Post </button>
        </div>
    )
}

export default SideBarLeft