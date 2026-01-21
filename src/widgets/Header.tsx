import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type HeaderProps = {
  title: string
  mode: 'light' | 'dark'
  onToggleMode: () => void
  toggleModeAriaLabel: string
  rightSlot?: ReactNode
}

export const Header = ({ title, mode, onToggleMode, toggleModeAriaLabel, rightSlot }: HeaderProps) => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar disableGutters sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, flex: 1 }}>
              {title}
            </Typography>
            {rightSlot}
            <IconButton aria-label={toggleModeAriaLabel} onClick={onToggleMode} size="large">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
