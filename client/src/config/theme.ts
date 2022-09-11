import { createTheme } from '@mui/material'
// import '@mui/x-date-pickers/themeAugmentation'
// import '@mui/x-date-pickers-pro/themeAugmentation'

// const muiTheme = createTheme({})

const theme = createTheme({
  palette: {
    mode: 'dark',
  },

  typography: {},

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.table-container': { boxShadow: 'none' },
        },
      },
    },
  },
})

export default theme
