import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import './ContentFeed.scss'
import * as api from '../../api/index.js';

const ContentFeed = () => {
  // get posts from redux
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch();

  // Get posts on initial render
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <div className='content-feed'>
      {/* Render all of the posts... */}
      {posts.slice(0).reverse().map((post) => (
        <Post key={post._id} {...post} /> ))}
    </div>
  )
}

export default ContentFeed