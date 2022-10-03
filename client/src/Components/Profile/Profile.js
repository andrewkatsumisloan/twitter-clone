import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Post from '../Post/Post'
import SideBarLeft from '../SideBar/SideBarLeft/SideBarLeft'

import ProfileHeader from './ProfileHeader';
import './Profile.scss'

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    // get posts from redux
    const posts = useSelector((state) => state.posts)

    console.log('This is the user stored locally: ', user)
    console.log('Unfiltered posts: ', posts)


    // Get posts from the user
    const userPosts = posts.filter((post) => post.creatorId === user?.result?.sub)


    console.log('User posts: ', userPosts)

    // Get posts on initial render
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className='main-profile-container'>
            <div className='central-profile-container'>
                <ProfileHeader> </ProfileHeader>
                <div className='content-feed-profile'>
                    {userPosts.slice(0).reverse().map((post) => (
                        <Post key={post._id} {...post} />))}
                </div>
            </div>
        </div>
    )
}

export default Profile