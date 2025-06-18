import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const rolePrompts = {
  teacher: "You are an AI teaching assistant for NextClass. Help teachers with:",
  student: "You are an AI learning assistant for NextClass. Help students with:",
  parent: "You are an AI parent guide for NextClass. Help parents with:"
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message, role } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for NextClass education platform. 
          The user is a ${role}. Provide helpful, concise responses about:
          - Course content
          - Assignments
          - School information
          - Educational guidance
          Keep responses under 150 words.`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });
    
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ 
      reply: "I'm having trouble connecting to the AI service. Please try again later." 
    });
  }
}