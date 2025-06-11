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

**Note**: This demonstration requires React 19. Make sure you're using the latest version of React to see the `use` hook in action.
