import React, { useState, useEffect } from 'react';
import './CurrentBox.css';

export const CurrentBox = ({ }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="currentCell"
      style={{
        backgroundColor: 'green',
      }}
    ></div>
  )
};
