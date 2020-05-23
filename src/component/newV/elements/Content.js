import React from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from '../content/Menu'
import Colors from '../common/themes/Colors'
import {MENU} from '../common/constantes/home'
import Detales from "../content/Detales"

const ContentContainer = styled(Container)`
    height: 100%;
    color: ${Colors.darkGrey};
    font-size: 24px;
`
const Empty = styled(Container)`
    width:100px;
    background-color: transparent;
    margin: 0;
`
const Content = ({
    isProject,
    isExp,
    isFormation,
    isMail,
    isHome,
    goToProjectContent,
    goToExpContent,
    goToFormationContent,
    goToMailForm,
    contentIsShown, 
    hideContent,...props}) => {

    const exp = MENU[0];
    const projects = MENU[2];
    const diplome=MENU[1];
    const mail=MENU[3];

  
    return (
        <ContentContainer fluid>
                {contentIsShown ? 
                <Detales closeSlide={hideContent} 
                        viewDetales={contentIsShown}
                        isExp={isExp}
                        isFormation={isFormation}
                        isProject={isProject}
                        isMail={isMail}
                        isHome={isHome}
                        exp={exp}
                        projects={projects}
                        diplome={diplome}
                        mail={mail}/> 
                : <Empty/>}
                <Menu exp={exp} 
                        diplome={diplome} 
                        projects={projects}
                        isDeploy={contentIsShown} 
                        fromExpButton={goToExpContent} 
                        fromFormationButton={goToFormationContent}
                        fromProjectButton={goToProjectContent}
                        fromMailButton={goToMailForm}/>
                        
        </ContentContainer>
    )
}

export default Content