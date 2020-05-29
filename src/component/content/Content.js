import React from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from './Menu'
import Colors from '../common/themes/Colors'
import {MENU} from '../common/constantes/home'
import Detales from "./detales/Detales"
import Aboutme from "./AboutMe"
import Navigation from "../Navigation"
import Footer from "./Footer"

const ContentContainer = styled(Container)`
  
    color: ${Colors.darkGrey};
    font-size: 24px;

    @media screen and (max-width:576px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const Content = ({
    isProject,
    isExp,
    isFormation,
    isMail,
    isHome,
    isActive,
    footerOpen,
    goToProjectContent,
    goToExpContent,
    goToFormationContent,
    goToMailForm,
    contentIsShown, 
    hideContent,
    notFooter,...props}) => {

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
                : <Aboutme isHome={isHome}/>}
                <Menu exp={exp} 
                        diplome={diplome} 
                        projects={projects}
                        isDeploy={contentIsShown} 
                        fromExpButton={goToExpContent} 
                        fromFormationButton={goToFormationContent}
                        fromProjectButton={goToProjectContent}
                        fromMailButton={goToMailForm}
                        isExp={isExp}
                        isFormation={isFormation}
                        isProject={isProject}
                        isMail={isMail}
                        isHome={isHome}/>
                <Footer footerOpen={footerOpen} slideOutFooter={notFooter} isHome={isHome}/>
                        
        </ContentContainer>
    )
}

export default Content