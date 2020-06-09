import React from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from './Menu'
import Colors from '../common/themes/Colors'
import Detales from "./detales/Detales"
import Aboutme from "./AboutMe"

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
    goToProjectContent,
    goToExpContent,
    goToFormationContent,
    goToMailForm,
    contentIsShown, 
    showNext,
    showPrevious,
    hideContent,
    ...props}) => {
 
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
            <Menu isDeploy={contentIsShown} 
                fromExpButton={goToExpContent} 
                fromFormationButton={goToFormationContent}
                fromProjectButton={goToProjectContent}
                fromMailButton={goToMailForm}
                isExp={isExp}
                isFormation={isFormation}
                isProject={isProject}
                isMail={isMail}
                isHome={isHome} />             
        </ContentContainer>
    )
}

export default Content