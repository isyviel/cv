import { useState, useEffect } from "react";

const useWindowSize = () => {
    
    const [height, setH] = useState(window.innerHeight)
    const [width, setW] = useState(window.innerWidth)
    const [size, setSize] = useState({ h: height, w : width})

    const detectSize =()=> {
      setH(window.innerHeight)
      setW(window.innerWidth)
      setSize({h: height, w: width})
    }

    const onResize = (event) => {
      const { innerWidth, innerHeight } = event.target
      setW(innerWidth)
      setH(innerHeight)
    }

    useEffect(() => {
      detectSize()
      window.addEventListener('resize', onResize)
      return () => {
          window.removeEventListener('resize', onResize)
        }
      
    }, [height, width]);
  
    return size
  };
  
  export default useWindowSize;