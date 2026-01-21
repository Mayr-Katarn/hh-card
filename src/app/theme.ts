import { createTheme } from '@mui/material/styles'

export function createAppTheme(mode: 'light' | 'dark') {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: mode === 'dark' ? '#ce93d8' : '#9c27b0',
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    },
  })
}
