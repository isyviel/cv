import { createMuiTheme } from '@material-ui/core/styles';
import { grey,orange } from '@material-ui/core/colors';

const Them = createMuiTheme(
  { palette: {
                 primary: { main: grey[50] },
                 secondary: { main: orange[700] },
              },
  })
export default Them