import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


// This runs before every subsequent request, appends a token to each request header
// It is used to authenticate the user in auth.js middleware on the server
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (message) => API.post('/posts', message);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

