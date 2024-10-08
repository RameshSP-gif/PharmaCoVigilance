import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/forgot-password', { email });
      alert('Reset link sent to your email.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleForgotPassword}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default ForgotPassword;
