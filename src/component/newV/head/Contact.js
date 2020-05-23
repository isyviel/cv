import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import ImageButton from '../common/ImageButton'
import {HEAD,ICONS} from '../common/constantes/home'
import { Button } from "@material-ui/core"
import Phone from "./Phone"
import Mail from "./Mail"

const ListeContainer = styled(Container)`
    margin: 10px 0px 0px 0px;
    padding: 0 !important;
`
const ContactDiv = styled.div`
    color: white;
    font-size: 20px;
    @media screen and (max-width:576px) {
        display: none;
    }
`

const Contact = ({isHome, handleClickOpen, contactForm, returnToHome,...props}) => {
   
    return(
       <ListeContainer>
                    {HEAD.map((label,index) => {
                        return (
                    <Row key={index} className="align-items-center xs-align-items-end">
                        {isHome && index === 1 &&(
                            <Mail displayForm={contactForm}/>
                        )}
                        {!isHome && index=== 0 &&(
                            <Button size='small' onClick={returnToHome} target="_blank" rel="noopener noreferrer">
                                <ImageButton src="images/home.png"/>
                            </Button>)}
                        {index === 2 &&(
                            <Phone label={label} isHome={isHome}/>
                        )}
                        {index === 3 &&(
                            <Button size='small' href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index-1]}/>
                            </Button>)}
                        {index === 4 &&(
                            <Button size='small' href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index-1]}/>
                            </Button>)}
                         {index === 5 &&(
                            <Button size='small' href='adeline_simon_CV.pdf' target='__blank' rel="noopener noreferrer">
                                <ImageButton src={ICONS[index-1]}/>
                            </Button>
                        )}
                        {isHome &&(<ContactDiv key={index} className={index === 2 ? "ml-1" : "" }>{label}</ContactDiv>)}
                    </Row>)})}
        </ListeContainer>
    )
}

export default Contact