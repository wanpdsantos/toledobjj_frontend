import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.grey.A400,
    },
    secondary: {
      main: colors.blueGrey.A400,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: colors.common.white,
    },
  },
});

export default theme;