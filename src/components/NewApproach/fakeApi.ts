export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// API response interfaces
interface ApiUser {
  id: number;
  name: string;
  email: string;
}

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Create a promise-based data fetcher for user data using real API
export const fetchUserData = async (userId: number): Promise<User> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
  console.log("🐲 🐲 🐲 ~ fetchUserData ~ response:", response)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const user: ApiUser = await response.json();
  
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: `https://i.pravatar.cc/150?u=${user.id}`
  };
};

// Create a promise-based data fetcher for posts data using real API
export const fetchPostsData = async (userId: number): Promise<Post[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const posts: ApiPost[] = await response.json();
  
  return posts.map(post => ({
    id: post.id,
    title: post.title,
    body: post.body,
    userId: post.userId
  }));
};