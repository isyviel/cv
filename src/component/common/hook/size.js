import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState({ h: null, w : null})
    const detectSize =()=> {
        setSize({h: window.innerHeight, w: window.innerWidth})
    }

    useEffect(() => {
      detectSize()
    }, []);
  
    return size
  };
  
  export default useWindowSize;