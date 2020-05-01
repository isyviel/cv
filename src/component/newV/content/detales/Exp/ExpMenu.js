import React from "react"
import styled from "styled-components"
import { Row,Col } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import { ThemeProvider, makeStyles } from '@material-ui/styles';

const ButtonRow = styled(Row)`
    justify-content: center;
    align-items: center;
    margin-top: 10%;
`
const DMenu = ({displaySales,displayWeb,...props}) => {  

    const useStyles = makeStyles((theme) => ({
        root: {
            color: "#FF7A00",
            background:"linear-gradient(145deg, #ffffff, #e6e6e6)", 
            boxShadow: "10px 10px 20px #b0b0b0,-10px -10px 20px #ffffff",
            width: "80%",
            fontSize: "16px",
            '&:hover': {
                backgroundColor: "#FFFFF", 
                boxShadow: "inset 6px 6px 13px #adadad,inset -6px -6px 13px #ffffff",
              },
            '&:focus': {
                background:"linear-gradient(145deg, #ff8300, #e66e00)", 
                boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
                color: "white",
            },
            fontWeight: "bold",
    }}))
    
    const classes = useStyles()

    return (
            <ThemeProvider>
                    <Col xs="2">
                        <ButtonRow>
                            <Button className={classes.root} id="web" autoFocus={true} onClick={displayWeb}>Web</Button>
                        </ButtonRow>
                        <ButtonRow>
                            <Button  className={classes.root} id="sales" onClick={displaySales}>Vente</Button>
                        </ButtonRow>
                    </Col>
            </ThemeProvider>
    )
        
}
export default DMenu