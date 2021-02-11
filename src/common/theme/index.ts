export { default as GlobalStyle } from '@/common/theme/Global';
export { default as Devices } from '@/common/theme/Devices';
export { default as muiTheme } from '@/common/theme/MUI';
export { default as Mixin } from '@/common/theme/Mixin';

import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

// SECTION custom styled-component
export const theme = {
  colors: {
    primary: '#606C38',
    secondary: '#DDA15E',
    darkenp: '#283618',
    darkens: '#BC6C25',
    background: '#FEFAE0',
    alter: '#2a9d8f',
  },
};

// SECTION custom Material-UI
export const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
