import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Input from './Input'
import Area from './Area'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import {Container} from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button';

const CustomContainer = styled(Container)`
    width: 80%;
    border-radius: 8px;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.5);
    background-color: white;
    margin-top: 2%;
    padding : 2%;
`


const Form = ({title,content,...props}) => {
    
    return (
        
            <CustomContainer>
                <h1>Pour me contacter...</h1>
                <Container>
                    <Col lg="12">
                        <Input label="E-Mail" required={true}/>
                    </Col>
                    <Col s="12">
                        <Input label="Objet : " required={false}/>
                    </Col>
                    <Col>
                        <Area/>
                    </Col>
                </Container>
                <Container className="row">
                    <Col>
                        <Input label="Nom" required={false}/>
                    </Col>
                    <Col>
                        <Input label="Prénom" required={false}/>
                    </Col>
                    <Col>
                        <Input label="Téléphone" required={false}/>
                    </Col>
                </Container>
                <Col>
                    <Button variant="outlined" color="primary">
                        Envoyer
                    </Button>
                </Col>
            </CustomContainer> 
    )
}

export default Form