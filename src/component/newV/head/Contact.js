import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import ImageButton from '../common/ImageButton'
import {MENU,ICONS} from '../common/constantes/home'

const ListeContainer = styled(Container)
`
    margin: 10px 0px 0px 70px;
`

const ContactDiv = styled.div
`
    color: white;
    font-size: 24px;
`

const Contact = () => {
   
    return(
       <ListeContainer>
            {MENU.map((label,index) => {
                return ( 
                    <Row className="mt-2 align-items-center">
                        <ImageButton src={ICONS[index]}/>
                        <ContactDiv key={index}>{label}</ContactDiv>
                    </Row>)
            })}
        </ListeContainer>
    )
}

export default Contact