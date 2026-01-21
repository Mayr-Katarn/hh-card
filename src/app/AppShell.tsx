import { Box, Container } from '@mui/material'
import type { ReactNode } from 'react'
import { Footer } from '../widgets/Footer'
import { Header } from '../widgets/Header'

type AppShellProps = {
  title: string
  name: string
  mode: 'light' | 'dark'
  onToggleMode: () => void
  toggleModeAriaLabel: string
  headerRightSlot?: ReactNode
  children: ReactNode
}

export const AppShell = ({
  title,
  name,
  mode,
  onToggleMode,
  toggleModeAriaLabel,
  headerRightSlot,
  children,
}: AppShellProps) => {
  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Header
        title={title}
        mode={mode}
        onToggleMode={onToggleMode}
        toggleModeAriaLabel={toggleModeAriaLabel}
        rightSlot={headerRightSlot}
      />
      <Box component="main" sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer name={name} />
    </Box>
  )
}
