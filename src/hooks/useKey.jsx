import { useRef, useEffect } from 'react';

// https://www.toptal.com/developers/keycode
export const useKey = (key, cb) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    const handle = (event) => {
      if (event.code === key) {
        callbackRef.current(event);
      }
    };

    document.addEventListener('keypress', handle);
    return () => document.removeEventListener('keypress', handle);
  }, [key]);
};
