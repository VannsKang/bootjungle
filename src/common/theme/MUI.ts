import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2a9d8f',
    },
  },
  // overrides: {
  //   // Style sheet name ⚛️
  //   MuiButton: {
  //     // Name of the rule
  //     text: {
  //       // Some CSS
  //       background: 'linear-gradient(45deg, #BC6C25 30%, #DDA15E 90%)',
  //       borderRadius: 3,
  //       border: 0,
  //       color: '#FEFAE0',
  //       fontWeight: 700,
  //       height: 48,
  //       padding: '0 20px',
  //       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //     },
  //   },
  // },
});

export default muiTheme;
