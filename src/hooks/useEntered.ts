import { useState, useEffect } from 'react';

interface Ref {
  current: any;
}

export const useEntered = (ref: Ref, rootMargin: string = '0px'): Boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const curr = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        rootMargin,
      },
    );
    if (curr) {
      observer.observe(curr);
    }
    return () => {
      observer.unobserve(curr);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};
