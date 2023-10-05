import { useState, useLayoutEffect } from "react"

const queries = [
  // mobile 
  "(max-width: 766px)", 
  // tablet
  "(min-width: 767px) and (max-width: 1199px)", 
  // desktop
  "(min-width: 1820px)" 
]
export const useMatchMedia = () => {
  const mediaQueriLists = queries.map((el) => matchMedia(el));
  const getValues = () => mediaQueriLists.map((el) => el.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueriLists.forEach((el) => el.addEventListener('change', handler));
    
    return () => mediaQueriLists.forEach((el) => el.removeEventListener('change', handler));
  }, [])
  
  return [ 'isMobile', 'isTablet', 'isDesktop'].reduce((acc, currentScreen, index) => ({...acc, [currentScreen]: values[index]}), {})
}
