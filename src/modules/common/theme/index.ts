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
    fontFamily: "var(--carlito-font), Carlito, sans-serif",
    h1: {
      fontFamily: 'Urbanist',
      fontSize: 'clamp(2.25rem, 7vw, 3.75rem)',
      lineHeight: 1.05
    },
    h2: {
      fontFamily: 'Urbanist',
      fontSize: 'clamp(2rem, 6vw, 3.75rem)',
      lineHeight: 1.08
    },
    h3: {
      fontFamily: 'Urbanist',
      fontSize: 'clamp(1.65rem, 5vw, 3rem)',
      lineHeight: 1.12
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
