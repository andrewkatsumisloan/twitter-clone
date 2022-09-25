import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    message: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Post = mongoose.model('Post', postSchema);

export default Post;