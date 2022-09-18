import React from 'react'
import CreatePost from './CreatePost'
import ContentFeed from './ContentFeed'
import './Feed.scss'

const Feed = () => {
    return (
        <div className='main-feed'>
            <div className='main-container'>
                <h3> Latests Posts </h3>
                <CreatePost />
                <ContentFeed />
            </div>
        </div>
    )
}

export default Feed