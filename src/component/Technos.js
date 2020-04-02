import React from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import Tech from "./content/Tech"
import { SYMFONY, REACT, APIPLAT,ANDROID, JAVA, GIT, BOOTS } from "./common/constantes/logos"

const CustomContainer = styled(Container)`
    margin-top: 50px;
`
const Technos = () => {
    const techno = [SYMFONY,APIPLAT,REACT,GIT,BOOTS,ANDROID,JAVA];

    return (  
        <CustomContainer>  
            <Col>
                <Row className="justify-content-around">
                        {techno.map((tech,index) => <Tech tech={tech}  key={index}/>)}
                </Row>
            </Col>
        </CustomContainer> 
    )
}

export default Technos