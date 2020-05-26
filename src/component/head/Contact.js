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
    @media screen and (max-width:992px) {
        display: none;
    }
`
const CustomRow =styled(Row)`
    @media screen and (max-width:992px) {
        padding-left: 20px;
    }
    @media screen and (max-width:768px) {
        padding-left: 15px;
        margin-top: 25px;
    }
    @media screen and (max-width:576px) {
        padding-left: 2px;
    }
`

const Contact = ({isHome, handleClickOpen, contactForm, returnToHome,goToFooter,...props}) => {
   
    return(
       <ListeContainer>
                    {HEAD.map((label,index) => {
                        return (
                    <CustomRow key={index} className="justify-content-start align-items-center">
                        {index === 1 &&(
                            <Mail displayForm={contactForm}/>
                        )}
                        {!isHome && index=== 0 &&(
                            <Button onClick={returnToHome} target="_blank" rel="noopener noreferrer">
                                <ImageButton src="images/home.png"/>
                            </Button>)}
                        {index === 2 &&(
                            <Phone label={label} isHome={isHome}/>
                        )}
                        {index === 3 &&(
                            <Button href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index-1]}/>
                            </Button>)}
                        {index === 4 &&(
                            <Button href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index-1]}/>
                            </Button>)}
                         {index === 5 &&(
                            <Button href='adeline_simon_CV.pdf' target='__blank' rel="noopener noreferrer">
                                <ImageButton src={ICONS[index-1]}/>
                            </Button>
                        )}
                        {isHome &&(<ContactDiv key={index} className={index === 2 ? "ml-1" : "" }>{label}</ContactDiv>)}
                    </CustomRow>)})}
        </ListeContainer>
    )
}

export default Contact