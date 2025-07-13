import { useState, useEffect } from 'react';

function useDeviceBreakpoints(breakpoints = { mobile: 768, tablet: 1024 }) {
  const isClient = typeof window === 'object';

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  const isMobile = width <= breakpoints.mobile;
  const isTablet = width > breakpoints.mobile && width <= breakpoints.tablet;
  const isDesktop = width > breakpoints.tablet;

  return { isMobile, isTablet, isDesktop };
}

export default useDeviceBreakpoints;
