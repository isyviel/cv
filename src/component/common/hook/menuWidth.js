import { useState, useEffect } from "react";

const usemenuSize = () => {

    const [formWidth, setFormWidth] = useState(null)

    const detectMenuSize = () => {
        let menu = document.getElementById('menuRight').getBoundingClientRect()
        console.log(form,"=> form")
        console.log(menu,"=> menu")
        setFormWidth(menu.x - menu.width / 2) 
    }

    useEffect(() => {
        detectMenuSize()
    }, []);

    return formWidth

}
  
  export default usemenuSize