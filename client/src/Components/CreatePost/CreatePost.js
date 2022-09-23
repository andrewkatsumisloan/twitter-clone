import React, { useEffect, useState } from 'react'
import axios from 'axios';

import * as API from '../../API/index.js'

import './CreatePost.scss'

const CreatePost = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log(message);
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This is the message prior to submission: ', message)
        API.createPost({ message, createdAt: new Date().toISOString() });

        setMessage('');
    }

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className='create-post'>
            <form className='form-class' onSubmit={(e) => handleSubmit(e)}>
                <input
                    className='post-input'
                    placeholder="What's on your mind?"
                    onChange={handleChange}
                    value={message} />
                <button className='post-button'> Post </button>
            </form>
        </div>
    )
}

export default CreatePost