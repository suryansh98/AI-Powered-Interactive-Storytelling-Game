import type { Request, Response } from 'express';

export const getNextStory = async (req: Request, res: Response) => {
    const {playerInput} = req.body;

    // AI logic goes here — cleanly separated
  const nextStory = `You chose: "${playerInput}". The story continues...`;

  res.json({ next: nextStory });
};