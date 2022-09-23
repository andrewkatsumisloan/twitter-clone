import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Post from '../Post/Post'
import * as API from '../../API/index.js'

import './ContentFeed.scss'

const ContentFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.fetchPosts().then((posts) => {
      setPosts(posts.data.reverse());
    });
  });

  const handleDeletion = (id) => {
    API.deletePost(id);
    setPosts(posts.filter((post) => post._id !== id));
  }

  return (
    <div className='content-feed'>
      <h2> Feed </h2>
      {/* Render all of the posts... */}
      {posts.map((post) => (
        <Post key={post._id} {...post} deletePost={handleDeletion} /> ))}
    </div>
  )
}

export default ContentFeed