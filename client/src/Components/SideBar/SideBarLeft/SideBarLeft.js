import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideBarLeftItem from './SideBarItem/SideBarLeftItem'
import UserLoginButton from './UserLoginButton/UserLoginButton';
import StickyBox from 'react-sticky-box';

import './SideBarLeft.scss'
import ShibaLogo from '../../../Assets/shiba-logo.png'


const SideBarLeft = () => {

    return (
            <StickyBox className='sb-left'>
                <div className='app-logo'>
                    <img src={ShibaLogo} height='87.5px' width='70px' alt='Shiba Logo' />
                </div>
                <SideBarLeftItem itemName='Home' />
                <SideBarLeftItem itemName='Explore' />
                <SideBarLeftItem itemName='Notifications' />
                <SideBarLeftItem itemName='Messages' />
                <SideBarLeftItem itemName='Bookmarks' />
                <SideBarLeftItem itemName='Lists' />
                <SideBarLeftItem itemName='Profile' />
                <SideBarLeftItem itemName='More' />
                <button className='post-left-button'> Post </button>

                <UserLoginButton />

            </StickyBox>
    )
}

export default SideBarLeft