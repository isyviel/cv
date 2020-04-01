import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import { logRoles } from "@testing-library/react"
import Tech from "./content/Tech"
import Spacer from './common/Spacer'
import FondFleches from './common/FondFleches'
import { SYMFONY, HTML, REACT, APIPLAT,ANDROID, JAVA, GIT, BOOTS } from "./common/constantes/logos"

const Logos = styled(Row)`
   display: flex;
   justify-content: space-around;
`
const CustomContainer = styled(Container)`
    margin-top: 50px;
`
const Technos = () => {
    const techno = [SYMFONY,APIPLAT,REACT,GIT,BOOTS,ANDROID,JAVA];

    return (  
    <CustomContainer>  
        <Col>
            <Logos>
                    {techno.map((tech) => <Tech tech={tech}/>)}
            </Logos>
        </Col>
    </CustomContainer> 
    )
}



export default Technos