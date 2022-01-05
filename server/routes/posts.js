import express from 'express';

import { getPosts, createPost } from '../contollers/posts.js'

const router = express.Router(); // createing router
      
router.get('/', getPosts);        // read Posts
router.post('/', createPost);     // Write Posts

export default router;

