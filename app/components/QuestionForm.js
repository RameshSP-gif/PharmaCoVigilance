import { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [questionText, setQuestionText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/questions', { question_text: questionText });
      setQuestionText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask a question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        required
      />
      <button type="submit">Submit Question</button>
    </form>
  );
};

export default QuestionForm;
