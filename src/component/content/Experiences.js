import React, { useState} from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import ContentContainer from '../common/ContentContainer'
import Title from '../common/Title'
import ExpDetales from'./Detales/ExpDetales'
import {LISTE_EXP} from "../common/constantes/texte"
import Active from './Detales/Active'

const Experiences = ({exp,...props}) => {
    
    const experience = LISTE_EXP;
    const [isSales, setIsSales] = useState(false);
    const [isWeb, setIsWeb] = useState(true)
    const [isActive, setIsActive] = useState(null)

     const handleDisplayStrategia = () => {
        setIsSales(false)
        setIsWeb(true) 
    }
    const handleDisplaySales = () => {
        setIsSales(true)
        setIsWeb(false)
    }
    
    return(   
            <ContentContainer>
                <Row className="align-items-center justify-content-center">
                    <Title className="text-white"><p>Expérience</p></Title>
                </Row>
                {/* affichage des boutons en ligne sur petites et moyennes résolutions */}
                <Row className="d-xs-none d-lg-none d-md-block justify-content-center">
                    <Row className="justify-content-around">
                            <Active isActive={isWeb}
                                    content={experience[0]} 
                                    display={handleDisplayStrategia}/>  
                            <Active isActive={isSales}
                                    content={experience[1]} 
                                    display={handleDisplaySales}/>
                            <ExpDetales isSales={isSales} experience={experience}/>   
                    </Row>
                </Row>
                {/* affichage des boutons en colonne sur grandes résolutions */}
                <Row className="d-none d-lg-block justify-content-center">
                    <Row>
                        <Col>                      
                            <Active isActive={isWeb}
                                    content={experience[0]} 
                                    display={handleDisplayStrategia}/>
                            <Active isActive={isSales}
                                    content={experience[1]} 
                                    display={handleDisplaySales}/>
                        </Col>
                        <Col lg="8" xl="9">
                            <ExpDetales isSales={isSales} experience={experience}/>
                        </Col>
                    </Row>
                </Row>

             </ContentContainer>
        )}

export default Experiences