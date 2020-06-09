import { makeStyles } from '@material-ui/styles';
import Colors from "./Colors";

const footerStyles = makeStyles((theme) => ({
    root: {
        color: Colors.orange,
        fontFamily: 'Dosis',
        fontSize: '16px',
        '&:hover': {
            color: "white",
        },   
    },
    phone : {
        color: Colors.orange,
        fontFamily: 'Dosis',
        fontSize: '16px',
        padding: "6px 8px",
        marginRight: "0",
    },
    miniroot : {
        color: Colors.orange,
        fontFamily: 'Dosis',
        fontSize: '12px',
        '&:hover': {
            color: "white",
        },
    },
    miniphone : {
        color: Colors.orange,
        padding: "6px 8px",
        fontFamily: 'Dosis',
        fontSize: '12px',
    }  
}))
export default footerStyles