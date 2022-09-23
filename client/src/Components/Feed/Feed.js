import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import ContentFeed from '../ContentFeed/ContentFeed'
import './Feed.scss'

const Feed = () => {
    return (
        <div className='main-feed'>
            <div className='main-container'>
                <h2 className='feed-header'> Latests Posts </h2>
                <CreatePost />
                <ContentFeed />
            </div>
        </div>
    )
}

export default Feed