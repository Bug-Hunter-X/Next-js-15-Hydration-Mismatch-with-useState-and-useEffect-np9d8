```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if not handled properly
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCount(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>The window width is: {count}</p>
    </div>
  );
}
```