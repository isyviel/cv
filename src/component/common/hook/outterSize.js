import { useState, useEffect } from "react";

const useWindowOuterSize = () => {
    const [oSize, setOSize] = useState({ oH: null, oW : null})
    const detectOSize =()=> {
        setOSize({h: window.outerHeight, w: window.outerHeight})
    }

    useEffect(() => {
      detectOSize()
    }, []);
  
    return oSize
  };
  
  export default useWindowOuterSize;