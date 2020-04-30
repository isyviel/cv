import React , {useState} from "react"
import {Container,Row} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import { Slide, Zoom, Fade } from "@material-ui/core"
import DMenu from "./detales/DMenu"
import Strategia from "./detales/Strategia"
import Vente from "./detales/Vente"

const DetalesContainer =  styled(Container)`
    height: 450px;
    min-width: 99%;
    background: linear-gradient(90deg,rgb(255, 255, 255,0.1) 0%,rgba(255, 255, 255) 100%);
    margin: 0;
    padding: 3% 5% 3% 10%;
    font-family: Arial;
    font-size: 16px;
    z-index: 1;
`
const Cross = styled.img`
    cursor: pointer;
    width: 20px;
`
const Detales = ({viewDetales, closeSlide,...props}) => {

    const [isWeb, setIsWeb] = useState(true)
    const [isSales, setIsSales] = useState(false)
    
    const displaySales = () => {
        setIsSales(true)
        setIsWeb(false)
    }

    const displayWeb = () => {
        setIsWeb(true)
        setIsSales(false)
    }

    return(
            <Slide timeout={800} in={viewDetales} direction="left">
                <DetalesContainer>
                    <Row className="justify-content-end">
                        <Cross onClick={closeSlide} src="images/croix.png" alt="croix"/>
                    </Row>
                    <h1 className="h5">EXPERIENCE</h1>
                        <Row>
                            <DMenu displaySales={displaySales} displayWeb={displayWeb}/>
                            {isWeb && (<Strategia isWeb={isWeb}/>)}
                            {isSales &&(<Vente isSales={isSales}/>)}
                        </Row>
                </DetalesContainer>
            </Slide>
    )
}

export default Detales