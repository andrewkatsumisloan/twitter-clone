import React from 'react'
import moment from 'moment';

import './Post.scss'

const Post = ( props ) => {
  return (
    <div className='single-post' key={props._id}>
          <div className='profile-img'> </div>
          <div className='post-content'>
            <h3>{props.message}</h3>
            <p>{moment(props.createdAt).fromNow()}</p>
            {/* // Delete button */}
            <button onClick={() => props.deletePost(props._id)}> Delete </button>
          </div>

        </div>
  )
}

export default Post