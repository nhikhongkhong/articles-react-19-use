import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface DataFetcherProps {
  userId: number;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ userId }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const apiPosts = await response.json();
        const mockPosts: Post[] = apiPosts.map((post: ApiPost) => ({
          id: post.id,
          title: post.title,
          body: post.body,
          userId: post.userId
        }));
        
        setPosts(mockPosts);
      } catch {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  if (loading) {
    return (
      <div className="data-fetcher loading">
        <div className="loading-spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="data-fetcher error">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="data-fetcher">
      <h3>Posts by User {userId}</h3>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher; 