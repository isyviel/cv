import React from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from './Menu'
import Colors from '../common/themes/Colors'
import Detales from "./detales/Detales"
import Aboutme from "./AboutMe"

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
    showNext,
    showPrevious,
    hideContent,
    ...props}) => {

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
                    showNext={showNext}
                    showPrevious={showPrevious}
                    goSlide={true}/> : <Aboutme isHome={isHome}/>}
            <Menu   isDeploy={contentIsShown} 
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