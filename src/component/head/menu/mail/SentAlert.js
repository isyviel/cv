import React from "react";
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const SentAlert = ({open, status, action,...props})=> {
    
    return (
        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            autoHideDuration={4000}
            open={open}
            status={status}
            action={action}
         >
             {status ?
                <MuiAlert elevation={6} variant="filled" severity="success">Message envoyé</MuiAlert> :
                <MuiAlert elevation={6} variant="filled" severity="error">
                    Une erreur s'est produite, vérifiez votre saisie ou envoyez moi un mail à : adeline.simon31@hotmail.fr
                </MuiAlert>}
         </Snackbar> )
    
}

export default SentAlert