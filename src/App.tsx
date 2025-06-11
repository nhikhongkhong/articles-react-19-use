import { Suspense, useMemo, useState } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { DataFetcher as NewDataFetcher, UserProfile as NewUserProfile } from './components/NewApproach';
import { fetchPostsData, fetchUserData } from './components/NewApproach/fakeApi';
import { DataFetcher as OldDataFetcher, UserProfile as OldUserProfile } from './components/OldApproach';

function App() {
  const [oldApproachOpen, setOldApproachOpen] = useState(false);
  const [newApproachOpen, setNewApproachOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(1);

  // Create promises for the new approach components
  const userPromise = useMemo(() => {
    return fetchUserData(selectedUserId);
  }, [selectedUserId]);

  const postsPromise = useMemo(() => {
    return fetchPostsData(selectedUserId);
  }, [selectedUserId]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React 19 `use` Hook Demonstration</h1>
        <p>Comparing traditional data fetching with React 19's new `use` hook</p>
      </header>

      <main className="app-main">
        <div className="controls">
          <label htmlFor="userId">Select User ID: </label>
          <select 
            id="userId" 
            value={selectedUserId} 
            onChange={(e) => setSelectedUserId(Number(e.target.value))}
          >
            <option value={1}>User 1</option>
            <option value={2}>User 2</option>
            <option value={3}>User 3</option>
          </select>
        </div>

        <div className="approaches-container">
          {/* Old Approach Section */}
          <div className="approach-section">
            <button 
              className="collapsible-button"
              onClick={() => setOldApproachOpen(!oldApproachOpen)}
            >
              <span className="button-text">
                {oldApproachOpen ? '▼' : '▶'} Traditional Approach (useState + useEffect)
              </span>
            </button>
            
            {oldApproachOpen && (
              <div className="collapsible-content">
                <div className="approach-description">
                  <h3>Traditional Data Fetching</h3>
                  <p>This approach uses <code>useState</code> and <code>useEffect</code> to manage loading states, error handling, and data fetching.</p>
                  <ul>
                    <li>Requires manual state management for loading, error, and data states</li>
                    <li>Uses <code>useEffect</code> for side effects</li>
                    <li>More boilerplate code</li>
                    <li>Explicit error and loading handling</li>
                  </ul>
                </div>
                
                <div className="components-demo">
                  <div className="component-demo">
                    <h4>User Profile Component</h4>
                    <OldUserProfile userId={selectedUserId} />
                  </div>
                  
                  <div className="component-demo">
                    <h4>Posts Data Fetcher</h4>
                    <OldDataFetcher userId={selectedUserId} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* New Approach Section */}
          <div className="approach-section">
            <button 
              className="collapsible-button"
              onClick={() => setNewApproachOpen(!newApproachOpen)}
            >
              <span className="button-text">
                {newApproachOpen ? '▼' : '▶'} React 19 Approach (use hook)
              </span>
            </button>
            
            {newApproachOpen && (
              <div className="collapsible-content">
                <div className="approach-description">
                  <h3>React 19 `use` Hook</h3>
                  <p>This approach uses the new <code>use</code> hook to handle promises directly, eliminating the need for manual state management.</p>
                  <ul>
                    <li>Direct promise handling with <code>use</code> hook</li>
                    <li>No manual loading or error state management</li>
                    <li>Cleaner, more declarative code</li>
                    <li>Automatic suspense integration</li>
                    <li>Promises created in parent component and passed down</li>
                  </ul>
                </div>
                
                <div className="components-demo">
                  <div className="component-demo">
                    <h4>User Profile Component</h4>
                    <ErrorBoundary>
                      <Suspense fallback={
                        <div className="user-profile loading">
                          <div className="loading-spinner"></div>
                          <p>Loading user profile...</p>
                        </div>
                      }>
                        <NewUserProfile userPromise={userPromise} />
                      </Suspense>
                    </ErrorBoundary>
                  </div>
                  
                  <div className="component-demo">
                    <h4>Posts Data Fetcher</h4>
                    <ErrorBoundary>
                      <Suspense fallback={
                        <div className="data-fetcher loading">
                          <div className="loading-spinner"></div>
                          <p>Loading posts...</p>
                        </div>
                      }>
                        <NewDataFetcher postsPromise={postsPromise} userId={selectedUserId} />
                      </Suspense>
                    </ErrorBoundary>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

