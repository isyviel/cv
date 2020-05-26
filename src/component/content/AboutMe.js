import React from "react"
import Container from "@bootstrap-styled/v4/lib/Container"
import styled from "styled-components"
import { Slide } from "@material-ui/core"
import { ABOUTME } from "../common/constantes/home"
import Quote from "../head/Quote"
import Colors from "../common/themes/Colors"

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

const CustomImg = styled.img `
    
    height: 200px;
    z-index: 2;
    @media screen and (max-width:768px) {
        height: 150px;
    }
    @media screen and (max-width:576px) {
        height: 50px;
    }
`
const Aboutme = ({isHome,...props}) => {
    return (
        <Slide timeout={800}  direction="right" in={isHome}>
            <CustomContainer>
                
            <div className="pl-3 text-center">
                Passionnée de moto et d'informatique , j'ai laissé derrière moi 10 années de vente au détail d'habillement pour évoluer dans le monde du digital.
            </div>
            <div className="pl-3 text-center">Ici commence mon voyage de développeuse web.</div>
           </CustomContainer>
        </Slide>
    )
}

export default Aboutme