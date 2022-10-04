import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SideBarLeft from '../SideBar/SideBarLeft/SideBarLeft'
import ProfileFeed from './ProfileFeed/ProfileFeed';
import LikeFeed from './LikeFeed/LikeFeed';

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
    const userLikes = posts.filter((post) => post.likes.includes(user?.result?.sub))

    console.log('User posts: ', userPosts)

    // Get posts on initial render
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className='main-profile-container'>
            <div className='central-profile-container'>
                <ProfileHeader> </ProfileHeader>
                {/* Should probably use the ContentFeed component for this, later. */}
                <div className='profile-feed'>
                    <Tabs variant='soft-rounded' isFitted colorScheme='green'>
                        <TabList mt={4} mb={4} pr={12} pl={12}>
                            <Tab shadow='sm' pt={2}>Posts</Tab>
                            <Tab shadow='sm' pt={2}>Likes</Tab>
                        </TabList>
                        <TabPanels >
                            <TabPanel p={0}>
                                <ProfileFeed posts={userPosts}> </ProfileFeed>
                            </TabPanel>
                            <TabPanel p={0}>
                                <LikeFeed likedPosts={userLikes}> </LikeFeed>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Profile