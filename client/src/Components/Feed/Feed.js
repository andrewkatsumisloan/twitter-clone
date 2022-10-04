import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import ContentFeed from '../ContentFeed/ContentFeed'
import StickyBox from 'react-sticky-box'



import './Feed.scss'

const Feed = () => {
    return (
        <div className='main-feed'>
            <div className='main-container'>
                <StickyBox className='feed-header'>
                    <h2> Home </h2>
                </StickyBox>
                <CreatePost />
                <ContentFeed />
            </div>
        </div>
    )
}

export default Feed