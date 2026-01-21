import { Button, CssBaseline, Stack } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Outlet, Link as RouterLink } from 'react-router-dom'
import { profile } from '../shared/content/profile'
import { LanguageSwitch } from '../widgets/LanguageSwitch'
import { AppShell } from './AppShell'
import { createAppTheme } from './theme'

export const AppLayout = () => {
  const { t } = useTranslation()

  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('themeMode')
    return saved === 'dark' || saved === 'light' ? saved : 'light'
  })

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  const theme = useMemo(() => createAppTheme(mode), [mode])

  const headerRightSlot = (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <Button component={RouterLink} to="/" color="inherit">
        {t('navHome')}
      </Button>
      <Button component={RouterLink} to="/projects" color="inherit">
        {t('navProjects')}
      </Button>
      <Button component={RouterLink} to="/cv" color="inherit">
        {t('navCv')}
      </Button>
      <Button component={RouterLink} to="/contacts" color="inherit">
        {t('navContacts')}
      </Button>
      <LanguageSwitch />
    </Stack>
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>{t('appTitle')}</title>
      </Helmet>
      <AppShell
        title={t('appTitle')}
        name={profile.name}
        mode={mode}
        onToggleMode={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
        toggleModeAriaLabel={mode === 'dark' ? t('themeLight') : t('themeDark')}
        headerRightSlot={headerRightSlot}
      >
        <Outlet />
      </AppShell>
    </ThemeProvider>
  )
}
