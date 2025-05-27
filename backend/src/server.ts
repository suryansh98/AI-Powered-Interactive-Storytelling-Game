import express from 'express';
import type { Request, Response } from 'express';
import storyRoute from './routes/story';  // Import at the top

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic test routes
app.get('/', (req, res) => {
  res.send('Welcome to the AI-Powered Interactive Storytelling Game!');
});

app.post('/api/test', (req: Request, res: Response) => {
  console.log('Request body:', req.body);
  res.json({ message: 'Received your data!', yourData: req.body });
});

// Register your story routes here
app.use('/api/story', storyRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
