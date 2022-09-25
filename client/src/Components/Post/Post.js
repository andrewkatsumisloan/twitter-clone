import React from 'react'
import { useDispatch } from 'react-redux'
import { Avatar } from '@material-ui/core'
import moment from 'moment';
import { deletePost } from '../../actions/posts';
import './Post.scss'

const Post = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='single-post' key={props._id}>
      <div className='img-body'>
        {/* <div className='profile-img'> </div> */}
        <Avatar alt='A'> </Avatar>
        <div className='post-body'>
          <h3>{props.message}</h3>
        </div>
      </div>
      <div className='post-footer'>
        <div className='message-details'>
          <h5> {props.creator} </h5>
          <p>{moment(props.createdAt).fromNow()}</p>
        </div>
        <div className='delete-container'>
          <button className='delete-post' onClick={() => dispatch(deletePost(props._id))}> Delete </button>
        </div>
      </div>
    </div>
  )
}

export default Post