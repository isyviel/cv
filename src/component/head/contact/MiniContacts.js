import React from "react"
import styled from "styled-components"
import {Row} from "@bootstrap-styled/v4/lib"
import ImageButton from '../../common/img/ImageButton'
import {HEAD,ICONS} from '../../common/constantes/home'
import { Button} from "@material-ui/core"
import Phone from "./Phone"
import Mail from "../mail/Mail"

const MiniContactDetales = ({isHome, handleClickOpen, contactForm, returnToHome,goToFooter,...props}) => {

    return(
       
        HEAD.map((label,index) => {
            return (
        <Row key={index} className="align-items-center justify-content-center  mt-4 mt-sm-0 ">
            {index === 1 &&(
                <Mail displayForm={contactForm}/>
            )}
            {index=== 0 &&(
                <Button className="p-0" onClick={returnToHome} target="_blank" rel="noopener noreferrer">
                    <ImageButton alt="icone home" src="images/home.png"/>
                </Button>)}
            {index === 2 &&(
                <Phone label={label} isHome={isHome}/>
            )}
            {index === 3 &&(
                <Button className="p-0" href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">
                    <ImageButton alt="icone linkedin" src={ICONS[index-1]}/>
                </Button>)}
            {index === 4 &&(
                <Button className="p-0" href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">
                    <ImageButton alt="icone github" src={ICONS[index-1]}/>
                </Button>)}
                {index === 5 &&(
                <Button className="p-0" href='adeline_simon_CV.pdf' target='__blank' rel="noopener noreferrer">
                    <ImageButton alt="icone pdf" src={ICONS[index-1]}/>
                </Button>
            )}
        </Row>)})
    )
}

export default MiniContactDetales