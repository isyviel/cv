
import React , {useState} from "react"
import Button from '@material-ui/core/Button';
import ImageButton from "../common/ImageButton"
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Phone = ({isHome,label,...props}) => {
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
    
  return (
    <div>
      <Button disabled={isHome ? true : false } size="small" className="pl-0 ml-1" aria-describedby={id} onClick={handleClickOpen}>
        <ImageButton src="images/phone.png" alt="icone téléphone" id="téléphoner"/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'right',
          horizontal: 'right',
        }}
      >
        <Typography className={classes.typography} >{label}</Typography>
      </Popover>
    </div>
  )
}

export default Phone