const mongoose = require('mongoose');
const User = require('../user/userModel.js');



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: User }],
    likes: [{
        type: String
    }],
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    }],
    date: { 
        type: Date, 
        default: Date.now 
    },
    imageURL:{
        type: String
    } 
})

let Post = mongoose.model('posts', postSchema);

module.exports = Post;