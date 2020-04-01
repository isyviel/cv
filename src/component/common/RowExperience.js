import React from "react"
import styled from "styled-components"
import {Row} from "@bootstrap-styled/v4/lib"
import Bouton from './Bouton'

const RowExp = ({content,isActive,display,...props}) => {

    const CustomRow = styled(Row)`
        background: ${isActive ? 
            "url(images/clicked.png)"  
            : "url(images/disactive.png)"}
            no-repeat center;
        padding: 20px 5px 0px 35px;
        height:80px;
        width: 250px;
        background-size:100%;
        display: flex;
        justify-content: space-around;
        
        @media screen and (max-width:768px) {
            height: 30px;
            background: none;
            padding: 0px;
        }
    ` 

    return(
    <CustomRow isActive={isActive}><Bouton display={display} isActive={isActive} content={content}/></CustomRow>
    )
}

export default RowExp