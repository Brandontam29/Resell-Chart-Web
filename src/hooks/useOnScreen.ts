import { useState, useEffect } from 'react';

interface Ref {
  current: any;
}
const useOnScreen = (ref: Ref, rootMargin: string = '0px'): Boolean => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const curr = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
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
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};

export default useOnScreen;
