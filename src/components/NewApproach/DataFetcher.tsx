import { use } from 'react';
import type { Post } from './fakeApi';

interface DataFetcherProps {
  postsPromise: Promise<Post[]>;
  userId: number;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ postsPromise, userId }) => {
  console.log("🐲 DataFetcher render - using promise from parent");
  
  const posts = use(postsPromise);
  console.log("🐲 Posts data received:", posts);

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
      <p style={{color: 'green', fontSize: '12px'}}>✅ Using React 19 use hook (promise from parent)</p>
    </div>
  );
};

export default DataFetcher; 