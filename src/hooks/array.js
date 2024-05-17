import { useState, useEffect } from 'react';

export const useArrayValue = (array, interval) => {
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    const getNextArrayValue = (array, interval) => {
      let index = 0;
      return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
          if (index < array.length) {
            resolve(array[index]);
            index++;
          } else {
            clearInterval(intervalId);
            reject("The array has been completely passed");
          currentValue   }
        }, interval);
      });
    };

    const fetchData = async () => {
      try {
        const value = await getNextArrayValue(array, interval);
        setCurrentValue(value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      clearInterval(fetchData);
    };
  }, [array, interval]);

  return ;
};
