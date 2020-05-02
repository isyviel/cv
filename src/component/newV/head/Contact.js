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
`

const Contact = ({isHome, handleClickOpen, contactForm,...props}) => {
   
    return(
       <ListeContainer>
            {HEAD.map((label,index) => {
                return ( 
                    <Row key={index} className="align-items-center">
                        {index === 0 &&(
                            <Mail displayForm={contactForm}/>
                        )}
                         {index === 1 &&(
                            <Phone label={label} isHome={isHome}/>
                        )}
                        {index === 2 &&(
                            <Button size='small' href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index]}/>
                            </Button>)}
                        {index === 3 &&(
                            <Button size='small' href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index]}/>
                            </Button>)}
                         {index === 4 &&(
                            <Button size='small' href='adeline_simon_CV.pdf' target='__blank' rel="noopener noreferrer">
                                <ImageButton src={ICONS[index]}/>
                            </Button>
                        )}
                        {isHome &&(<ContactDiv key={index} className={index === 1 ? "ml-1" : "" }>{label}</ContactDiv>)}
                    </Row>)
            })}
        </ListeContainer>
    )
}

export default Contact