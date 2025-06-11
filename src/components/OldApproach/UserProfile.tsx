import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface UserProfileProps {
  userId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const apiUser = await response.json();
        const mockUser: User = {
          id: apiUser.id,
          name: apiUser.name,
          email: apiUser.email,
          avatar: `https://i.pravatar.cc/150?u=${apiUser.id}`
        };
        
        setUser(mockUser);
      } catch {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <div className="user-profile loading">
        <div className="loading-spinner"></div>
        <p>Loading user profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-profile error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="user-profile">
        <p>No user found</p>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <div className="user-avatar">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>User ID: {user.id}</p>
      </div>
    </div>
  );
};

export default UserProfile; 