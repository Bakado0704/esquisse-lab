import type {} from '@mui/x-date-pickers/themeAugmentation';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '@media (max-width:480px)': {
            maxWidth: '100vw',
            overflow: 'auto',
          },
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          '@media (max-width:480px)': {
            width: 'auto',
          },
        },
      },
    },
  },
});

export default theme;
