import { useState, useEffect } from 'react';

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const useWindowSize = () => {
  const [size, setSize] = useState(getWindowSize());

  useEffect(() => {
    const onResize = () => {
      const newSize = getWindowSize();
      setSize(newSize);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    ...size,
  };
};

export default useWindowSize;
