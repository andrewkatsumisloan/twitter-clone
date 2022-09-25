import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment';
import { deletePost } from '../../actions/posts';
import './Post.scss'

const Post = (props) => {
  const dispatch = useDispatch();
  
  return (
    <div className='single-post' key={props._id}>
      <div className='profile-img'> </div>
      <div className='post-content'>
        <h3>{props.message}</h3>
        <p>{moment(props.createdAt).fromNow()}</p>
        {/* // Delete button */}
        <button className='delete-post' onClick={() => dispatch(deletePost(props._id))}> Delete </button>
      </div>
    </div>
  )
}

export default Post