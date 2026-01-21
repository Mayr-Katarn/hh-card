import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { AppLanguage } from '../shared/i18n/resources'

export const LanguageSwitch = () => {
  const { i18n } = useTranslation()
  const value = (i18n.language === 'en' ? 'en' : 'ru') satisfies AppLanguage

  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={value}
      onChange={(_, next: AppLanguage | null) => {
        if (next) void i18n.changeLanguage(next)
      }}
      aria-label="Language"
      sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}
    >
      <ToggleButton value="ru" aria-label="Russian">
        RU
      </ToggleButton>
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
