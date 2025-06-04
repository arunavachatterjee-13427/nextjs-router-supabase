# AI Integration

The `/api/chat` route uses the Vercel AI SDK to provide a streaming chat endpoint powered by OpenAI.

```
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({ model: 'gpt-4', stream: true, messages })
  })
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
```

This endpoint streams responses from the OpenAI API, allowing the client to render AI-generated text in real time.
