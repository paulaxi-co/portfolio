"use client"
import { createTheme } from "@mui/material";

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#C6B299',
    }
  },
  typography: {
    h1: {
      fontFamily: 'Urbanist'
    },
    h2: {
      fontFamily: 'Urbanist'
    },
    h3: {
      fontFamily: 'Urbanist'
    }
  },
  components: {
    'MuiButton': {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                borderRadius: '25px',
                height: 50,
                color: 'white',
                textTransform: 'none',
                fontSize: 18,
                fontWeight: '500'
              }
            }
          ]
        }
      }
    }
  }
})
