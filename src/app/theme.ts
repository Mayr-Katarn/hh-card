import { createTheme, alpha } from '@mui/material/styles'

export function createAppTheme(mode: 'light' | 'dark') {
  const isDark = mode === 'dark'

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#818cf8' : '#6366f1',
        light: isDark ? '#a5b4fc' : '#818cf8',
        dark: isDark ? '#6366f1' : '#4f46e5',
      },
      secondary: {
        main: isDark ? '#f0abfc' : '#d946ef',
        light: isDark ? '#f5d0fe' : '#e879f9',
        dark: isDark ? '#d946ef' : '#c026d3',
      },
      background: {
        default: isDark ? '#0f0f23' : '#fafbfc',
        paper: isDark ? '#1a1a2e' : '#ffffff',
      },
      text: {
        primary: isDark ? '#e2e8f0' : '#1e293b',
        secondary: isDark ? '#94a3b8' : '#64748b',
      },
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      h3: {
        fontWeight: 900,
        letterSpacing: '-0.02em',
      },
      h5: {
        fontWeight: 800,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 12,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          contained: {
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
            '&:hover': {
              transform: 'translateY(-2px)',
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.5)',
            },
          },
          outlined: {
            padding: '10px 24px',
            borderWidth: 2,
            '&:hover': {
              transform: 'translateY(-2px)',
              borderWidth: 2,
              background: alpha(isDark ? '#818cf8' : '#6366f1', 0.08),
            },
          },
          text: {
            padding: '8px 16px',
            color: isDark ? '#e2e8f0' : '#1e293b',
            '&:hover': {
              background: alpha(isDark ? '#818cf8' : '#6366f1', 0.1),
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: `1px solid ${alpha(isDark ? '#ffffff' : '#000000', 0.08)}`,
            background: isDark
              ? 'linear-gradient(145deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 22, 40, 0.95) 100%)'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 251, 252, 0.95) 100%)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: isDark
                ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                : '0 20px 40px rgba(99, 102, 241, 0.15)',
              borderColor: alpha(isDark ? '#818cf8' : '#6366f1', 0.3),
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: 8,
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
            },
          },
          filled: {
            background: isDark
              ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
              : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            '&:hover': {
              background: isDark
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)'
                : 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            background: `linear-gradient(90deg, transparent, ${alpha(isDark ? '#818cf8' : '#6366f1', 0.3)}, transparent)`,
            border: 'none',
            height: 1,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: isDark ? '#818cf8' : '#6366f1',
            textDecoration: 'none',
            fontWeight: 500,
            position: 'relative',
            transition: 'color 0.2s ease',
            '&:hover': {
              color: isDark ? '#a5b4fc' : '#4f46e5',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -2,
              left: 0,
              width: 0,
              height: 2,
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              transition: 'width 0.3s ease',
              borderRadius: 1,
            },
            '&:hover::after': {
              width: '100%',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(20px)',
            background: isDark
              ? 'rgba(15, 15, 35, 0.85)'
              : 'rgba(255, 255, 255, 0.85)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              background: alpha(isDark ? '#818cf8' : '#6366f1', 0.1),
            },
          },
        },
      },
    },
  })
}
