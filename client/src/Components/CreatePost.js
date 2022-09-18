import React from 'react'

import './CreatePost.scss'

const CreatePost = () => {
    return (
            <div className='create-post'>
                <textarea className='post-input' type="text" 
                placeholder="What's on your mind?" />
                <button className='post-button'> Post </button>
            </div>
    )
}

export default CreatePost