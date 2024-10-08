import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const router = useRouter();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/change-password', { oldPassword, newPassword });
      router.push('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleChangePassword}>
      <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
      <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePassword;
