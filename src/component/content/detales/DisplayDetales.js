import React, { useState } from "react"
import {Col,Row} from "@bootstrap-styled/v4/lib"
import { Fade } from "@material-ui/core"
import styled from "styled-components"
import WebSite from "../../common/WebSite"
import Description from "./Description"
import Colors from "../../common/themes/Colors"
import Logo from "../../common/img/Logo"
import Container from "@bootstrap-styled/v4/lib/Container"

const Title = styled.h1`
    color: ${Colors.orange};
    font-family: 'Bangers';
    font-size: 3em;

    @media screen and (max-width:992px) {
        font-size: 2em;
    }
    @media screen and (max-width:768px) {
        font-size: 26px;
    }
    @media screen and (max-width:576px) {
        font-size: 20px;
        text-align: center;
        margin-top: 15px;
    }
`
const Skills = styled.h2`
    font-family: 'Bangers';
    margin : 20px 0 10px 15px;
    @media screen and (max-width:576px) {
        font-size: 16px;
        text-align: center;
    }
`
const SoftSkills = styled.h3`
    font-family: 'Bangers';
    margin : 20px 0 20px 15px;
    @media screen and (max-width:576px) {
        text-align: center;
    }
`

const CustomLi = styled.ul`
    list-style-type: none;
    padding-left: 0;
    @media screen and (max-width:576px) {
        margin-left: 10px;
    }
`
const Text = styled.p`
    color: ${Colors.orange};
    margin: 0;
    @media screen and (max-width:576px) {
        text-align: center;
    }
`

const DisplayDetales = ({isContent,isWeb,isSales,isAdrar,isEnglish,detales,description,...props}) => {

    return(
        <Fade in={isContent} timeout={800}>
            <Col>
                <Row className="justify-content-sm-between justify-content-center align-items-start ml-0 pr-4">
                    <Col>
                        <Title className="h3">{detales.title}</Title>
                        <Row className="justify-content-center justify-content-sm-start">
                            <WebSite href={detales.href} content={detales.content} isSales={isSales} isEnglish={isEnglish}/>
                        </Row>
                        {isAdrar &&(<Text>2020</Text>)}
                        {isWeb &&(<Text>2020</Text>)}
                    </Col>
                    <Logo alt={detales.alt} src={detales.src}/>
                </Row>
                <Skills className="h5">{detales.skills}</Skills>
                <SoftSkills className="h6">{detales.softSkills}</SoftSkills>
                <article className="ml-1 ml-sm-3">
                    <CustomLi>
                        {description.map((element,index) => {
                            return(
                                <Description content={element} key={index}/>
                            )
                        })} 
                    </CustomLi>
                </article>
            </Col>
        </Fade>)
}

export default DisplayDetales