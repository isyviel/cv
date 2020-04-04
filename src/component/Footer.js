import React from "react"
import styled from "styled-components"
import {Row,Col,Container} from "@bootstrap-styled/v4/lib"
import Button from '@material-ui/core/Button';

const CustomContainer = styled(Container)`
    background-color: rgba(0,0,0,0.8);
    
`
const Footer = () => {
    return (
        <CustomContainer fluid>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Row className="justify-content-end"><Button color="secondary" href="https://icones8.fr/icons/" target="_blank" rel="noopener noreferrer">Icons8.fr</Button></Row>
                    <Row className="justify-content-end"><Button color="secondary" href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</Button></Row>
                    <Row className="justify-content-end"><Button color="secondary" href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">Service EmailJS</Button></Row>
                    <Row className="justify-content-end"><Button color="secondary" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Publication GitHubPages</Button></Row>
                </Col>
                <Col xs="auto">
                    <Row><Button color="primary">adeline.simon31@hotmail.fr</Button></Row>
                    <Row><Button color="primary">0621692869</Button></Row>
                    <Row><Button color="primary" href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">Github</Button></Row>
                    <Row><Button color="primary" href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">Linkedin</Button></Row>
                </Col>
            </Row>
        </CustomContainer>
    )
}

export default Footer