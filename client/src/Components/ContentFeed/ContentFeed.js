import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Post from '../Post/Post'
import * as api from '../../api/index.js'

import './ContentFeed.scss'

const ContentFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.fetchPosts().then((posts) => {
      setPosts(posts.data.reverse());
    });
  });

  const handleDeletion = (id) => {
    api.deletePost(id);
    setPosts(posts.filter((post) => post._id !== id));
  }

  return (
    <div className='content-feed'>
      {/* Render all of the posts... */}
      {posts.map((post) => (
        <Post key={post._id} {...post} deletePost={handleDeletion} /> ))}
    </div>
  )
}

export default ContentFeed