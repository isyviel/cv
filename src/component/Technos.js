import React from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import Tech from "./content/Tech"
import TechSec from "./content/TechSec"
import { SYMFONY, REACT, APIPLAT,ANDROID, JAVA, GIT, BOOTS, SQL, LINUX } from "./common/constantes/logos"

const CustomContainer = styled(Container)`
    margin-top: 30px;
`
const Technos = () => {
    const techno = [SYMFONY,APIPLAT,REACT,GIT,BOOTS];
    const technoSec = [ANDROID,JAVA, SQL, LINUX]

    return (
        <div>
        <CustomContainer>  
            <Col>
                <Row className="justify-content-around">
                    {techno.map((tech,index) => <Tech tech={tech} key={index}/>)}
                </Row>
            </Col>
        </CustomContainer>
        <CustomContainer>
            <Col>
                <Row className="justify-content-around">
                    {technoSec.map((techSec,index) => <TechSec techSec={techSec} key={index}/>)}
                </Row>
            </Col>
       </CustomContainer>
       </div>
    )
}

export default Technos