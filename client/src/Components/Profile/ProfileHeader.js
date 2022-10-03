import React, { useState } from 'react'
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
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log('USER!!!', user)

    return (
        <div className='profile-header-container'>
            {/* Large material ui avatar */}
            <Avatar className='avatar' style={{ fontSize: '62px' }} alt='Andrew Sloan' src={user?.result?.picture} />
            <div className='profile-details'>
                <div className='profile-name'> {user?.result?.name} </div>
                <div className='profile-username'> @{dummyData[0]['username']} </div>
                <div className='profile-intro'> {dummyData[0]['intro']} </div>
            </div>
        </div>
    )
}

export default ProfileHeader