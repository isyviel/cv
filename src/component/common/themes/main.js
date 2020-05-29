import useWindowSize from "../hook/size"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "url(images/deco.png) fixed bottom no-repeat",
        minHeight: `${h}px`,
        maxheight: `${h}px`,
        fontFamily: "Dosis",
        padding: "0 !important",
        overflowY: "hidden",
        overflowX: "hidden", 
    }
}))

export default useStyles
