import { useState, useEffect, useReducer } from "react"

// we need to keep track of which image has been loaded. 
//We don't want our fallback image to "override" our main 
//image if that would load first (due to caching or just 
//coincidence), so we need to make sure to implement that.
const reducer = (currentSrc, action) => {
    if (action.type === 'main image loaded') {
        return action.src;
      } 
      if (!currentSrc) {
        return action.src;
      }
      return currentSrc;
}
const usePreload = ({src, fallbackSrc}) => {
    // It will return the best available image 
    //src already loaded, or null if neither
    // has loaded yet.
    const [currentSrc, dispatch] = useReducer(reducer,null)
    
    useEffect(() => {
        const mainImg = new Image();
        const fallback = new Image();
        // // when the main image is loaded and when the 
        // fallback image is loaded. We leave the business
        // logic to our reducer, which decides when 
        //to update the source and when to leave it be.
        mainImg.onload = () => {
            dispatch({ type: 'main image loaded', src });
        }

        fallback.onload = () => {
            dispatch({ type: 'fallback image loaded', src: fallbackSrc });
        }

        mainImg.src = src;
        fallback.src = fallbackSrc;
      }, [src,fallbackSrc]);
    

    return currentSrc;
    
}
  export default usePreload