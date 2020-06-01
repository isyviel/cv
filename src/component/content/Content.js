import React from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from './Menu'
import Colors from '../common/themes/Colors'
import {MENU} from '../common/constantes/home'
import Detales from "./detales/Detales"
import Aboutme from "./AboutMe"
import { Slide } from "@material-ui/core"
import Navigation from "../Navigation"

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
    showNext,
    showPrevious,
    hideContent,...props}) => {

    const ContentContainer = styled(Container)`
        color: ${Colors.darkGrey};
        font-size: 24px;
        ${contentIsShown ? "transition: transform 800ms cubic-bezier(0, 0, 0.2, 1) 0ms" : "transform: none"}; 
        @media screen and (max-width:576px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;        
    }
`
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
                        mail={mail}
                        showNext={showNext}
                        showPrevious={showPrevious}
                        goSlide={true}/> : <Aboutme isHome={isHome}/>}
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
        </ContentContainer>
    )
}

export default Content