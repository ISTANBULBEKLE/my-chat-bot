import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Validate and extract the user question from the request body
    const question = req.body.question as string;
    if (!question) {
      return res.status(400).json({ error: 'Please provide a question.' });
    }

    // Call OpenAI API and handle potential errors
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Adjust model as needed
        messages: [
          { role: 'user', content: question },
        ],
        maxTokens: 150, // Adjust response length as needed
        n: 1, // Request only one completion
        stop: null, // Set stop criteria, if desired
        temperature: 0.7, // Adjust temperature for randomness
      });

      // Return the chatbot's response
      return res.status(200).json({ response: response.choices[0].message });
    } catch (error) {
      console.error('OpenAI API error:', error);
      return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
  } else {
    // Handle other HTTP methods (optional)
  }
}