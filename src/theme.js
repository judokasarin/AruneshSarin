import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7209B7',
    },
    secondary: {
      main: '#F72585'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#003',
    },
  },
  typography: {
    fontSize: '100%',
    fontFamily: 'Raleway, sans-serif',
    
  },
});

export default theme;
