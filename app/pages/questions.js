import { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionForm from '../components/QuestionForm';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get('/api/questions');
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <QuestionForm />
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <a href={`/question/${question.id}`}>{question.question_text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
