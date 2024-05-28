import React, { useContext } from 'react';
import { useLayoutEffect, useState } from 'react';
import { screenWidthThreshold } from 'consts';
import {
  withOrientationChange,
  isMobileOnly,
  isMobile,
  isTablet,
} from 'react-device-detect';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const ScreenContext = React.createContext(null);

export const ScreenProvider = isMobile
  ? withOrientationChange(({ isPortrait, children }) => {
      const value = {
        isPortrait,
        isMobile: !isTablet && (isMobileOnly || isPortrait),
      };
      return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
    })
  : ({ children }) => {
      const [width] = useWindowSize();
      const value = {
        isMobile: width < screenWidthThreshold,
      };
      return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
    };

export const useScreen = () => useContext(ScreenContext);
