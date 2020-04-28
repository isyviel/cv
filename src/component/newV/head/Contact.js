import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import ImageButton from '../common/ImageButton'
import {HEAD,ICONS} from '../common/constantes/home'

const ListeContainer = styled(Container)`
    margin: 10px 0px 0px 70px;
    padding: 0 !important;
`

const ContactDiv = styled.div`
    color: white;
    font-size: 24px;
`

const Contact = () => {
   
    return(
       <ListeContainer>
            {HEAD.map((label,index) => {
                return ( 
                    <Row key={index} className="mt-2 align-items-center">
                        <ImageButton src={ICONS[index]}/>
                        <ContactDiv>{label}</ContactDiv>
                    </Row>)
            })}
        </ListeContainer>
    )
}

export default Contact