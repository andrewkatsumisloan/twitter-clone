import React from 'react'
import { Avatar } from '@material-ui/core'
import './ProfileHeader.scss'

const dummyData = [
    {
        id: 1,
        name: 'Andrew Sloan',
        username: 'andrewsloan',
        intro: 'Cat dad',
    }
]
const ProfileHeader = () => {
    return (
        <div className='profile-header-container'>
            {/* Large material ui avatar */}
            <Avatar className='avatar' style={{ fontSize: '62px' }} alt='Andrew Sloan' />
            <div className='profile-details'>
                <div className='profile-name'> {dummyData[0]['name']} </div>
                <div className='profile-username'> @{dummyData[0]['username']} </div>
                <div className='profile-intro'> {dummyData[0]['intro']} </div>
            </div>
        </div>
    )
}

export default ProfileHeader