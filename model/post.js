const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    images: [{ type: String }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    datePosted: { type: Date, default: Date.now },
})

const Post = mongoose.model('Posts', PostSchema);

module.exports = Post;