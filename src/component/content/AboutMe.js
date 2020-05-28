import React, { useState,useEffect } from "react"
import Container from "@bootstrap-styled/v4/lib/Container"
import styled from "styled-components"
import { Slide,Fade } from "@material-ui/core"
import { ABOUTME } from "../common/constantes/home"
import Quote from "../head/Quote"
import Colors from "../common/themes/Colors"
import useMousePosition from "../common/constantes/position"
import useWindowSize from "../common/constantes/size"

const CustomContainer = styled(Container)`
    position: fixed;
    top: 150px;
    left: 440px;
    font-size: 20px;
    width: 50%;

    @media screen and (max-width:1200px) {
        left: 370px;
        width: 35%;
    }
    
    @media screen and (max-width:992px) {
        left: 170px;
        width: 45%;
    }

    @media screen and (max-width:768px) {
        left: 120px;
        padding:0;
        margin:0;
        font-size: 15px;
        width: 40%;
    }

    @media screen and (max-width:576px) {
        font-size: 15px;
        left: 50px;
        top: 200px;
        width: 80%;
    }
`

const MotoImg = styled.img `
    
    height: 300px;
    position: fixed;
    top: 55%;
    left: 30%;
   
    z-index: 2;
    @media screen and (max-width:992px) {
        height: 300px;
    }
  @media screen and (max-width:768px) {
        display: none;
    }
`


const ColImg = styled.img `
    
    height: 300px;
    position: fixed;
    top: 60%;
    left:60%;
   
    z-index: 2;
    @media screen and (max-width:992px) {
        height: 300px;
    }
    @media screen and (max-width:768px) {
        display: none;
    }
`
const CustContainer = styled(Container)`
    height: 410px;
    width: 434px;
    background: pink;
    position: fixed;
    bottom: 84px;
    left: 452px;
    @media screen and (max-width:1200px) {
        left:352px;
        width: 323px;
    }
    @media screen and (max-width:992px) {
        left:152px;
        width: 360px;
    }
    @media screen and (max-width:768px) {
        left:102px;
        width: 312px;
    }
    @media screen and (max-width:596px) {
        display: none;
    }
`

const Aboutme = ({isHome,...props}) => {

    const {x, y} = useMousePosition();
    const {h,w}  = useWindowSize();
    const [detectMoto, setDetectMoto] = useState(true);
    const [detect, setDetect] = useState(true);
    const [detectPiano, setPiano] =useState(true);
    const hasMovedCursor = typeof x === "number" && typeof y === "number";

    useEffect(() => {
      detectMouse()
      
    }, [h,w,x,y]);

    const minMotoX = w * 31/100
    const maxMotoX = w * 55/100
    const minMotoY = h * 45/100
    const maxMotoY = h * 90/100

    const minIraX = w * 60/100
    const maxIraX = w * 96/100
    const minIraY = h * 60/100
    const maxIraY = h * 96/100

    const detectMouse = () => {
        

        if((x > minMotoX) && (x < maxMotoX) && (y > minMotoY) && (y < maxMotoY)){
            setDetect(false)
            setDetectMoto(true)
            console.log(detectMoto)
        } else if ((x > minIraX) && (x < maxIraX) && (y > minIraY) && (y < maxIraY)){
            setDetectMoto(false)
            setDetect(true)
        } else if ((x > 520 && x < 630) && (y > 85 && y < 365)) {
               setDetectMoto(false)
             setDetect(false)
               setPiano(true)
           }
            else {
            setDetectMoto(false)
            setDetect(false)
               setPiano(false)
        } 
    }

    return (
            <CustomContainer>
                <div>EN CONSTRUCTION</div>
                {/* <div>{hasMovedCursor
          ? `Your cursor is at ${x}, ${y}`
          : "Move your mouse around."}</div>
                <div>values : {minMotoX},{maxMotoX}, {minIraY}, {maxIraY}</div> */}
                <div>{detectMoto ? <Fade in={detectMoto}><MotoImg src= "images/lucky.png"/></Fade>: ""}</div>
                <div>{detect ? <Fade in={detect}><ColImg src= "images/iraty.png"/></Fade>: ""}</div>
            
                
               {/* <CustomImg src= "images/lucky.png"/> */}
             {/* <div className="pl-3 text-center">
            //     Passionnée de moto et d'informatique , j'ai laissé derrière moi 10 années de vente au détail d'habillement pour évoluer dans le monde du digital.
            // </div>*/}
            <div className="pl-3 text-center">Ici commence mon voyage de développeuse web.</div> 
           </CustomContainer>
    )
}

export default Aboutme