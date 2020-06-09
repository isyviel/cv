import { makeStyles } from '@material-ui/styles';

const cardStyles = makeStyles((theme) => ({
    root: {
        fontSize: "20px",
        fontFamily: 'Dosis',
        textDecorationStyle: 'none',
        color: 'black',
    },
    link : { 
        background:"linear-gradient(145deg, #ff8300, #e66e00)", 
        boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
        color: "white",
        width: "200px",
       margin: "5px 0",
        fontFamily: 'Dosis',
        '&:hover': {
        backgroundColor: "#FF7A00", 
        boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
        color: "white",
      }, 
    },
    label: {
        fontSize: "22px",
        fontFamily: 'Bangers',
    }
}))

export default cardStyles