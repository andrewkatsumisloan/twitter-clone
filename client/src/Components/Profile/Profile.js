import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Post from '../Post/Post'
import SideBarLeft from '../SideBar/SideBarLeft/SideBarLeft'

const Profile = ({ user }) => {
    // get posts from redux
    const posts = useSelector((state) => state.posts)

    // get posts of a specific user
    // const userPosts = posts.filter((post) => post.creator === user._id)

    const dispatch = useDispatch();

    // Get posts on initial render
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className='main-profile-container'>
            <SideBarLeft className='sidebar-left'> </SideBarLeft>
            <div className='content-feed'>
                {posts.slice(0).reverse().map((post) => (
                    <Post key={post._id} {...post} />))}
            </div>
        </div>
    )
}

export default Profile