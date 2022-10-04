import React from 'react'
import Post from '../../Post/Post'
import './LikeFeed.scss'

const LikeFeed = (props) => {
    return (
        <div>
            <div className='content-feed-profile'>
                {props.likedPosts.slice(0).reverse().map((post) => (
                    <Post key={post._id} {...post} />))}
            </div>
        </div>
    )
}

export default LikeFeed