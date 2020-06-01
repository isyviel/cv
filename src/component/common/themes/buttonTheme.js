import { makeStyles } from '@material-ui/styles';
import Colors from "./Colors";

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
    },
    active: {
        fontFamily: 'Dosis',
        width: "100%",
        backgroundColor: "#FFFFF",
        background: "rgba(255,255,255)",
        color: Colors.orange,
        boxShadow: "inset 6px 6px 13px #adadad, inset -6px -6px 13px #ffffff", 
    }
}))

export default useStyles