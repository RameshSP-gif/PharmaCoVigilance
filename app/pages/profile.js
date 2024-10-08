import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/api/users/me');
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
