import React from "react"
import styled from "styled-components"
import {Row} from "@bootstrap-styled/v4/lib"
import Bouton from '../../common/Bouton'

const RowExp = ({content,isActive,display,variant,...props}) => {

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
        margin-bottom:15px;
        
        @media screen and (max-width:768px) {
            height: 50px;
            background: none;
            padding: 0px;
            width: 220px;
            margin: 0;
        }
    ` 

    return(
        <CustomRow>
            <Bouton display={display} isActive={isActive} content={content} variant={variant}/>
        </CustomRow>
    )
}

export default RowExp