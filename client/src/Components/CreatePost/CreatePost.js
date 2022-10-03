import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';

import './CreatePost.scss'

const CreatePost = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    // Check and set user on initial render
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [useSelector((state) => state.auth)]);

    useEffect(() => {
        console.log(message);
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This is the message prior to submission: ', message)
        // api.createPost({ message, createdAt: new Date().toISOString() });

        dispatch(createPost({ message, creator: user?.result?.name, creatorId: user?.result?.sub }));
        setMessage('');
    }

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className='create-post-container'>
            <div className='create-post'>
                <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-class'>
                        {/* Conditionally render user avatar */}
                        {user ? (
                            <Avatar className='avatar' alt={user.result.name} src={user.result.picture} />
                        ) : (
                            <Avatar className='avatar' alt='' src='https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg' />
                        )}
                        <input
                            className='post-input'
                            placeholder="What's on your mind?"
                            onChange={handleChange}
                            value={message} />
                    </div>
                    <button className='post-button'> Post </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost