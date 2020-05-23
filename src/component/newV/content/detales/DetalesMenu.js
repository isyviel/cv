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
                    <Col xs="2 mr-4 d-none d-sm-block" sm="2">
                        <ButtonRow>
                            {isExp ? <Button className={classes.root} id="web" autoFocus={true} onClick={displayWeb}>Web</Button> : <Button className={classes.root} id="web" autoFocus={true} onClick={displayAdrar}>Web</Button>}
                        </ButtonRow>
                        <ButtonRow>
                            {isExp ? <Button className={classes.root} id="sales" onClick={displaySales}>Vente</Button> : <Button  className={classes.root} id="english" onClick={displayEnglish}>Anglais</Button>}
                        </ButtonRow>
                    </Col>
                    <Row className="d-block d-sm-none justify-content-center">
                        <Col xs="4">
                            {isExp ? <Button className={classes.root} id="web" autoFocus={true} onClick={displayWeb}>Web</Button> : <Button className={classes.root} id="web" autoFocus={true} onClick={displayAdrar}>Web</Button>}
                        </Col>
                        <Col xs="4">
                            {isExp ? <Button className={classes.root} id="sales" onClick={displaySales}>Vente</Button> : <Button  className={classes.root} id="english" onClick={displayEnglish}>Anglais</Button>}
                        </Col>
                    </Row>
            </ThemeProvider>
    )
        
}
export default DMenu