import { useState } from 'react';
import './App.css';
import Lock from './Lock';
import Story from './Story';

function App() {
  const [isLocked, setIsLocked] = useState(true);
  return (
    <div style={{ height: '100vh' }}>
    {isLocked ? (
      <Lock onEnter={() => setIsLocked(false)} />
    ) : (
      <Story />
    )}
    </div>
  );
}

export default App;
