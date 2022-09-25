import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import './ContentFeed.scss'
import * as api from '../../api/index.js';

const ContentFeed = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  // Get posts on initial render
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // Get posts from Redux, update when posts change
  const postsFromRedux = useSelector((state) => state.posts);
  useEffect(() => {
    postsFromRedux.reverse();
    setPosts(postsFromRedux);
  }, [postsFromRedux]);


  return (
    <div className='content-feed'>
      {/* Render all of the posts... */}
      {posts.map((post) => (
        <Post key={post._id} {...post} /> ))}
    </div>
  )
}

export default ContentFeed