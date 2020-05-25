import React from "react"
import styled from "styled-components"
import { Row,Col } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import Colors from "../../common/themes/Colors";

const ButtonRow = styled(Row)`
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    @media screen and (max-width:576px) {
        margin-top: 10px;
    }
`
const DMenu = ({displaySales,displayWeb, displayEnglish,displayAdrar,isExp,...props}) => {  

    const useStyles = makeStyles((theme) => ({
        root: {
            background:"linear-gradient(145deg, #ff8300, #e66e00)", 
            boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
            color: "white",
            width: "100%",
            fontFamily: 'Dosis',
            '&:hover': {
                backgroundColor: "#FF7A00", 
                boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
              },
            '&:focus': {
                backgroundColor: "#FFFFF",
                background: "rgba(255,255,255)",
                color: Colors.orange,
                boxShadow: "inset 6px 6px 13px #adadad, inset -6px -6px 13px #ffffff", 
            },
    }}))
    
    const classes = useStyles()

    return (
            <ThemeProvider>
                    <Col xs="10 mx-auto" sm="2 ml-4">
                        <ButtonRow>
                            {isExp ? <Button className={classes.root} id="web" autoFocus={true} onClick={displayWeb}>Web</Button> : <Button className={classes.root} id="web" autoFocus={true} onClick={displayAdrar}>Web</Button>}
                        </ButtonRow>
                        <ButtonRow>
                            {isExp ? <Button className={classes.root} id="sales" onClick={displaySales}>Vente</Button> : <Button  className={classes.root} id="english" onClick={displayEnglish}>Anglais</Button>}
                        </ButtonRow>
                    </Col>
            </ThemeProvider>
    )
        
}
export default DMenu