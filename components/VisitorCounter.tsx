'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Check if we've already counted this session to avoid spamming the API on every hot reload/navigation
        const hasVisited = sessionStorage.getItem('hasVisited_portfolio');
        
        // CounterAPI is a free public API for hit counters
        // We use a unique namespace and name for your portfolio
        const namespace = 'rajhavel26_portfolio';
        const name = 'global_visits';
        
        const url = hasVisited 
          ? `https://api.counterapi.dev/v1/${namespace}/${name}` // Just read the current count
          : `https://api.counterapi.dev/v1/${namespace}/${name}/up`; // Increment and read the new count
        
        const res = await fetch(url);
        const data = await res.json();
        
        if (data && typeof data.count === 'number') {
          // If it's the first time visiting, add a baseline number (e.g. 1500) to make it look established
          // Note: The API starts at 1, so we add an offset for aesthetic purposes.
          const baseOffset = 200; 
          setCount(data.count + baseOffset);
          
          if (!hasVisited) {
            sessionStorage.setItem('hasVisited_portfolio', 'true');
          }
        }
      } catch (error) {
        // Fallback static number if the API is blocked by an adblocker or rate limited
        // We do not console.error here because Next.js dev server will intercept it and show a full-screen error overlay
        setCount(208);
      }
    };
    
    fetchCount();
  }, []);

  return (
    <span className="text-blue-600 font-jetbrains font-bold ml-2 text-sm tracking-widest">
      {count === null ? '...' : count.toLocaleString()}
    </span>
  );
}
