import mongoose from 'mongoose';
import Post from '../models/post.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await Post.find();
        // console.log(postMessages)
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    // console.log('Got to create post in controller...', post)
    const newPost = new Post({ ...post, message: post.message, creator: post.creator, createdAt: new Date().toISOString(), creatorId: post.creatorId });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export const likePost = async (req, res) => {
//     const { id } = req.params;
//     const post = req.body;
//     // console.log('Got to like post in controller...', post)
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).send(`No post with id: ${id}`);
//     }

//     // increment like count
//     const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes }, { new: true });

//     res.json(updatedPost);
// }

export const likePost = async (req, res) => {
    const { id } = req.params;

    // HAS ACCESS TO userId from auth middleware
    if (!req.userId) {
        console.log('User is not authenticated.')
        return res.json({ message: 'Unauthenticated' });
    }

    console.log('Authenticated')

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id: ${id}`);

    const post = await Post.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        // like the post
        console.log('Should be liked now...')
        post.likes.push(req.userId);

    } else {
        // dislike a post
        // Return array of all likes BESIDES the current person's like
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    console.log('I got to the deletePost function in the controller')
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

