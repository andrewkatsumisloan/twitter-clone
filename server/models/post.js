import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    message: String,
    creator: String,
    creatorId: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    likes: {
        type: [String],
        default: [],
    },
})

var Post = mongoose.model('Post', postSchema);

export default Post;