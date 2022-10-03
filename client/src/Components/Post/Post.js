import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import moment from 'moment';
import { deletePost, likePost } from '../../actions/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

import './Post.scss'

const Post = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const likes = props.likes.length;

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [useSelector((state) => state.auth)]);

  return (
    <div className='single-post' key={props._id}>
      <div className='img-body'>
        {/* <div className='profile-img'> </div> */}
        <Avatar alt='A'> </Avatar>
        <div className='post-body'>
          <h3>{props.message}</h3>
        </div>
        <div className='like-container' onClick={() => dispatch(likePost(props._id))}>
          {
            // If user has liked post, render filled heart
            props.likes.find((like) => like === (user?.result?.sub)) ? (
              <FontAwesomeIcon icon={fasHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )
          }
          <div className='like-count'>
            {likes ? likes : null}
          </div>
        </div>
      </div>
      <div className='post-footer'>
        <div className='message-details'>
          <h5> {props.creator} </h5>
          <p>{moment(props.createdAt).fromNow()}</p>
        </div>
        {
          // If user is the creator of the post, render delete button
          user?.result?.sub === props.creatorId ? (
            <div className='delete-container'>
              <button className='delete-post' onClick={() => dispatch(deletePost(props._id))}> Delete </button>
            </div>
          ) : null
        }

      </div>
    </div >
  )
}

export default Post