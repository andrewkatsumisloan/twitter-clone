import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (message) => API.post('/posts', message);
export const deletePost = (id) => API.delete(`/posts/${id}`);

