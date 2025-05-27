import express from 'express';
import { getNextStory } from '../controllers/storyController';

const router = express.Router();

router.post('/next', getNextStory);

export default router;
