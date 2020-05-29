import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import ImageButton from '../common/img/ImageButton'
import {HEAD,ICONS} from '../common/constantes/home'
import { Button } from "@material-ui/core"
import Phone from "./Phone"
import Mail from "./Mail"

const ContactDiv = styled.div`
    color: white;
    font-size: 20px;
    @media screen and (max-width:992px) {
        display: none;
    }
`

const Contact = ({isHome, handleClickOpen, contactForm, returnToHome,goToFooter,...props}) => {

    const ListeContainer = styled(Container)`
        margin: 0;
        padding: 0 !important;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: ${isHome ? "start" : "center"};
    `
    const CustomRow =styled(Row)`
        @media screen and (max-width:992px) {
            padding-left: ${isHome ? "55px" : "0"};
        }
        @media screen and (max-width:768px) {
            padding-left: ${isHome ? "30px" : "0"};
            margin-top: 25px;
        }
        @media screen and (max-width:576px) {
            padding-left: 2px;
        }
    `
    return(
       <ListeContainer>
                    {HEAD.map((label,index) => {
                        return (
                    <CustomRow key={index} className={isHome ? "align-items-center justify-content-start" : " align-items-center justify-content-center "}>
                        {index === 1 &&(
                            <Mail displayForm={contactForm}/>
                        )}
                        {!isHome && index=== 0 &&(
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
                        {isHome &&(<ContactDiv key={index} className={index === 2 ? "ml-1" : "" }>{label}</ContactDiv>)}
                    </CustomRow>)})}
                    
        </ListeContainer>
    )
}

export default Contact