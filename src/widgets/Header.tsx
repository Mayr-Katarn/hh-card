import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { AppBar, Box, Container, Fade, IconButton, Toolbar, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import type { ReactNode } from 'react'

type HeaderProps = {
  title: string
  mode: 'light' | 'dark'
  onToggleMode: () => void
  toggleModeAriaLabel: string
  rightSlot?: ReactNode
}

export const Header = ({ title, mode, onToggleMode, toggleModeAriaLabel, rightSlot }: HeaderProps) => {
  const theme = useTheme()

  return (
    <Fade in timeout={600}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Toolbar disableGutters>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1.5 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  flex: 1,
                  background: mode === 'dark'
                    ? 'linear-gradient(135deg, #a5b4fc 0%, #f0abfc 100%)'
                    : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {title}
              </Typography>
              {rightSlot}
              <IconButton
                aria-label={toggleModeAriaLabel}
                onClick={onToggleMode}
                size="large"
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Fade>
  )
}
