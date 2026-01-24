import { Button, CssBaseline, Stack } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../shared/content/profile'
import { LanguageSwitch } from '../widgets/LanguageSwitch'
import { AppShell } from './AppShell'
import { createAppTheme } from './theme'

export const AppLayout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('themeMode')
    return saved === 'dark' || saved === 'light' ? saved : 'light'
  })

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  const theme = useMemo(() => createAppTheme(mode), [mode])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const scrollTo = () => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      if (location.pathname !== '/') {
        navigate('/')
        // Ждём рендера главной страницы, потом прокручиваем
        setTimeout(scrollTo, 100)
      } else {
        scrollTo()
      }
    },
    [location.pathname, navigate]
  )

  const headerRightSlot = (
    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <Button variant="text" onClick={() => scrollToSection('home')}>
        {t('navHome')}
      </Button>
      <Button variant="text" onClick={() => scrollToSection('projects')}>
        {t('navProjects')}
      </Button>
      <Button variant="text" onClick={() => scrollToSection('contacts')}>
        {t('navContacts')}
      </Button>
      <Button variant="text" href="/cv.pdf" target="_blank">
        {t('navCv')}
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
