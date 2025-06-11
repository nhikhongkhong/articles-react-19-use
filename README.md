# React 19 `use` Hook Demonstration

This project demonstrates the differences between traditional React data fetching approaches and React 19's new `use` hook. It provides interactive examples showing both old and new approaches side by side.

## 🚀 Features

- **Side-by-side Comparison**: See traditional `useState` + `useEffect` vs React 19's `use` hook
- **Interactive Demos**: Toggle between different user IDs to see data fetching in action
- **Collapsible Sections**: Organized demonstration of each approach
- **Real-time Updates**: Watch loading states and data changes in real-time
- **Responsive Design**: Works on desktop and mobile devices

## 📁 Project Structure

```
src/
├── components/
│   ├── OldApproach/          # Traditional useState + useEffect approach
│   │   ├── UserProfile.tsx
│   │   ├── DataFetcher.tsx
│   │   └── index.tsx
│   └── NewApproach/          # React 19 use hook approach
│       ├── UserProfile.tsx
│       ├── DataFetcher.tsx
│       └── index.tsx
├── App.tsx                   # Main application with collapsible sections
├── App.css                   # Styling for the demonstration
└── main.tsx                  # Application entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-19-use
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 What You'll Learn

### Traditional Approach (Old)
- Manual state management with `useState`
- Loading and error state handling
- `useEffect` for side effects
- More boilerplate code
- Explicit error handling

### React 19 `use` Hook (New)
- Direct promise handling
- Automatic Suspense integration
- Cleaner, more declarative code
- Reduced boilerplate
- Better performance with concurrent rendering

## 📖 Key Concepts Demonstrated

1. **Data Fetching**: How to fetch user profiles and posts
2. **Loading States**: Automatic vs manual loading state management
3. **Error Handling**: Error boundaries vs try-catch blocks
4. **State Management**: Manual vs automatic state management
5. **Code Complexity**: Boilerplate reduction with the `use` hook

## 🔧 Technical Details

### Traditional Approach Example
```typescript
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUserData(userId);
        setUser(userData);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!user) return <NoUserFound />;

  return <UserDisplay user={user} />;
};
```

### React 19 `use` Hook Example
```typescript
const UserProfile = ({ userId }) => {
  const user = use(fetchUserData(userId));
  return <UserDisplay user={user} />;
};
```

## 📚 Additional Resources

- [GUIDE.md](./GUIDE.md) - Comprehensive guide to the `use` hook
- [React 19 Documentation](https://react.dev)
- [React Suspense Documentation](https://react.dev/reference/react/Suspense)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This demonstration requires React 19. Make sure you're using the latest version of React to see the `use` hook in action.
