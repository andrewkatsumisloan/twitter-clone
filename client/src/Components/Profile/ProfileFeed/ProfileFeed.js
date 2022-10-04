import React from 'react'
import Post from '../../Post/Post'

const ProfileFeed = (props) => {
    return (
        <div className='content-feed-profile'>
            {props.posts.slice(0).reverse().map((post) => (
                <Post key={post._id} {...post} />))}
        </div>
    )
}

export default ProfileFeed