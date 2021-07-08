import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Gotham',
  },
  palette: {
    primary: {
      main: '#117EFF',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': 'Gotham',
      },
    },
    MuiTableRow: {
      root: {
        '&:not($head)': {
          borderBottom: '10px solid transparent',
          backgroundClip: 'padding-box',
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
      },
      head: {
        backgroundColor: 'transparent',
        color: '#9196AB',
      },
      body: {
        fontSize: 13,
      },
    },
    MuiButton: {
      root: {
        textTransform: 'initial',
        fontWeight: 'bold',
        padding: '8px 22px',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#117EFF',
          background: 'linear-gradient(90deg, #00E1FF 0%, #117EFF 100%)',
        },
      },
    },
  },
});

export default theme;
