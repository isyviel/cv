import React , {useState} from "react"
import Input from './mail/Input'
import Area from './mail/Area'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Colors from '../../common/theme/Colors'
import styled, { ThemeProvider } from "styled-components"
import ImageButton from "../../common/ImageButton"
import Them from "../../common/theme/MatThemes";
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { FormControl } from '@material-ui/core';
import Form from './mail/Form'
import { MDBPopover, MDBPopoverBody, MDBBtn } from "mdbreact";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const CustomP = styled.p`
font-size: 22px;
color: ${Colors.orange};

@media screen and (max-width:992px) {
    font-size: 14px;
}
`
const CustomDiv = styled(DialogContent)`
  background-color: white;  
`
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Mail = ({windowClose, send,...props}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const id = open ? 'simple-popover' : undefined;

    const handleClickOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    
    // const sendThenClose = () => {
    //   alert("envoyé");
    //   handleClose();
    // }

    return <div>
    <Button aria-describedby={id} onClick={handleClickOpen}>
      <ImageButton src="images/mail.png" />
    </Button>
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Typography className={classes.typography} >adeline.simon31@hotmail.fr</Typography>
    </Popover>
  </div>
   
        
        // return <MDBPopover
        //     placement="bottom"
        //     popover
        //     clickable
        //     id="popper2"
        //     >
        //     <MDBBtn><ImageButton src="images/mail.png" onClick={handleClickOpen}/></MDBBtn>
        //     <MDBPopoverBody>
        //         <CustomP>adeline.simon31@hotmail.fr</CustomP>
        //     </MDBPopoverBody>
        //     </MDBPopover>
        {/* <ThemeProvider theme={Them}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
          <CustomDiv>
      
          <DialogContent className="p-2">
            <FormControl>
              <Form windowClose={handleClose} send={sendThenClose}/>
            </FormControl>
          </DialogContent>
          </CustomDiv>
        </Dialog>
        </ThemeProvider> */}
      
    
}
export default Mail