'use client'

import React, { useState} from 'react';
import axios from 'axios';

interface ChatbotState {
  question: string;
  response: string;
  isLoading: boolean;
  error: string | null;
}

const ChatBotMain: React.FC = () => {
  const [state, setState] = useState<ChatbotState>({
    question: '',
    response: '',
    isLoading: false,
    error: null,
  });

  const askChatbot = async () => {
    if (!state.question) {
      setState({ ...state, error: 'Please provide a question.' });
      return;
    }

    try {
      setState({ ...state, isLoading: true, error: null });

      const response = await axios.post('/api/ask-openai', { question: state.question });

      setState({ ...state, isLoading: false, response: response.data.response, error: null });
    } catch (error) {
      console.error('API request error:', error);
      setState({ ...state, isLoading: false, error: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <div>
      <h2>Ask me...</h2>
      <input
        type="text"
        value={state.question}
        onChange={(e) => setState({ ...state, question: e.target.value })}
        placeholder="Ask me anything..."
      />
      <button onClick={askChatbot}>Ask</button>
      {state.isLoading && <p>Loading...</p>}
      {state.error && <p className="error">{state.error}</p>}
      {state.response && <p className="response">{state.response}</p>}
    </div>
  );
};

export default ChatBotMain;