import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', { username, email, password });
      if (res.status === 201) {
        router.push('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
