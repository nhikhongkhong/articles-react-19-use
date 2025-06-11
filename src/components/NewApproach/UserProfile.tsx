import { use } from 'react';
import { fetchUserData, type User } from './fakeApi';

interface UserProfileProps {
  userPromise?: Promise<User>;
  id: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ id }) => {
  const user = use(fetchUserData(id));
  return (
    <div className="user-profile">
      <div className="user-avatar">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>User ID: {user.id}</p>
        <p style={{color: 'green', fontSize: '12px'}}>✅ Using React 19 use hook (promise from parent)</p>
      </div>
    </div>
  );
};

export default UserProfile; 