import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import ImageButton from '../common/ImageButton'
import {HEAD,ICONS} from '../common/constantes/home'

const ListeContainer = styled(Container)`
    margin: 10px 0px 0px 0px;
    padding: 0 !important;
`

const ContactDiv = styled.div`
    color: white;
    font-size: 20px;
`

const Contact = ({isHome,...props}) => {
   
    return(
       <ListeContainer>
            {HEAD.map((label,index) => {
                return ( 
                    <Row key={index} className="mt-2 align-items-center">
                        {index === 0 &&(
                            <ImageButton src={ICONS[index]}/>
                        )}
                         {index === 1 &&(
                            <ImageButton src={ICONS[index]}/>
                        )}
                        {index === 2 &&(
                            <a href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index]}/>
                            </a>)}
                        {index === 3 &&(
                            <a href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">
                                <ImageButton src={ICONS[index]}/>
                            </a>)}
                         {index === 4 &&(
                            <ImageButton src={ICONS[index]}/>
                        )}
                        {isHome &&(<ContactDiv>{label}</ContactDiv>)}
                    </Row>)
            })}
        </ListeContainer>
    )
}

export default Contact