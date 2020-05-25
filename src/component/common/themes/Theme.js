import { createMuiTheme } from '@material-ui/core/styles';
import { grey,orange } from '@material-ui/core/colors';

const Theme = createMuiTheme(
  { root: {
      background:"linear-gradient(145deg, #ff8300, #e66e00)", 
      boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
      color: "white",
      width: "75%",
      fontSize: "16px",
      '&:hover': {
          backgroundColor: "#FF7A00", 
          boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
        },     
    }
  })
export default Theme