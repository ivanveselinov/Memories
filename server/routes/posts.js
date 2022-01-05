import express from 'express';

import { getPosts, createPost, updatePost, deletePost } from '../contollers/posts.js'

const router = express.Router(); // createing router
      
router.get('/', getPosts);        // Read Post
router.post('/', createPost);     // Write Post
router.patch('/:id', updatePost);  // Update Post
router.delete('/:id', deletePost); // Delete Post
export default router;
