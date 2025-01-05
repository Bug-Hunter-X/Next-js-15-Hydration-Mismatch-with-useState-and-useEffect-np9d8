```javascript
// pages/about.js
import { useState, useLayoutEffect } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setCount(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>The window width is: {count}</p>
    </div>
  );
}
```