import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SideBarLeftItem from './SideBarItem/SideBarLeftItem'
import UserLoginButton from './UserLoginButton/UserLoginButton';
import StickyBox from 'react-sticky-box';
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faUser, faTableList, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShibaLogo from '../../../Assets/shiba-logo.png'

import './SideBarLeft.scss'


const SideBarLeft = () => {

    return (
        <StickyBox className='sb-left'>
            <div className='app-logo'>
                <img src={ShibaLogo} height='87.5px' width='70px' alt='Shiba Logo' />
            </div>

            <Link to='/' >
                <div className='sb-left-item'>
                    <FontAwesomeIcon icon={faHome} /> &nbsp;
                    <p className='text-sb'> Home </p>
                </div>
            </Link>

            <Link className='sb-left-item' to='/profile'>
                <FontAwesomeIcon icon={faHashtag} /> &nbsp;
                <p className='text-sb'> Explore </p>
            </Link>

            <Link className='sb-left-item' to='/profile'>
                <FontAwesomeIcon icon={faBell} /> &nbsp;
                <p className='text-sb'> Notifications </p>
            </Link>

            <Link className='sb-left-item' to='/profile'>
                <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                <p className='text-sb'> Messages </p>
            </Link>

            <Link className='sb-left-item' to='/profile'>
                <FontAwesomeIcon icon={faBookmark} /> &nbsp;
                <p className='text-sb'> Bookmarks </p>
            </Link>

            <Link className='sb-left-item' to='/profile'>
                <FontAwesomeIcon icon={faTableList} /> &nbsp;
                <p className='text-sb'> Lists </p>
            </Link>

            <Link className='sb-left-item' to='/profile'>
                <FontAwesomeIcon icon={faUser} /> &nbsp;
                <p className='text-sb'> Profile </p>
            </Link>

            <Link className='sb-left-item' to='/profile'>
                <FontAwesomeIcon icon={faEllipsis} /> &nbsp;
                <p className='text-sb'> More </p>
            </Link>
            {/* <SideBarLeftItem itemName='Explore' />
            <SideBarLeftItem itemName='Notifications' />
            <SideBarLeftItem itemName='Messages' />
            <SideBarLeftItem itemName='Bookmarks' />
            <SideBarLeftItem itemName='Lists' /> */}
            {/* <SideBarLeftItem itemName='Profile' /> */}

            <button className='post-left-button'> Post </button>
            <UserLoginButton />

        </StickyBox>
    )
}

export default SideBarLeft