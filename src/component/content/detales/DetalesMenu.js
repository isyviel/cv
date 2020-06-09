import React from "react"
import styled from "styled-components"
import { Row,Col } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import useStyles from "../../common/themes/buttonTheme"

const ButtonRow = styled(Row)`
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    @media screen and (max-width:992px) {
        margin: 5px 0 10px 0;
    }
`
const DMenu = ({displaySales,displayWeb, displayEnglish,displayAdrar,isExp,isWeb,isAdrar,isSales,isEng,...props}) => {  
    
    const classes = useStyles()

    return (
            <Col xs="10 mx-auto" sm="2 ml-4">
                <ButtonRow>
                    {isExp ? 
                        <Button className={isWeb ? classes.active : classes.root} id="web" autoFocus={true} onClick={displayWeb}>Web</Button> 
                    :   <Button className={isAdrar ? classes.active : classes.root} id="web" autoFocus={true} onClick={displayAdrar}>Web</Button>}
                </ButtonRow>
                <ButtonRow>
                    {isExp ? 
                        <Button className={isSales ? classes.active : classes.root} id="sales" onClick={displaySales}>Vente</Button> 
                    :   <Button  className={isEng ? classes.active : classes.root} id="english" onClick={displayEnglish}>Anglais</Button>}
                </ButtonRow>
            </Col>
    )
        
}
export default DMenu