import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const QuestionDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchQuestion = async () => {
        const res = await axios.get(`/api/questions/${id}`);
        setQuestion(res.data);
      };
      fetchQuestion();
    }
  }, [id]);

  return (
    <div>
      <h1>Question Detail</h1>
      {question ? (
        <div>
          <h2>{question.question_text}</h2>
          {/* Here you can render answers and voting options */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuestionDetail;
