import { useState, useEffect } from 'react';

export default function useDebounce(value: string, delay: number = 500) {
  const [debouced, setDebouced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouced;
}
