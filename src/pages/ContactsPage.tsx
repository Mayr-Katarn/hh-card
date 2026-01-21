import { Link, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { profile } from '../shared/content/profile'

export const ContactsPage = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        {t('sectionContacts')}
      </Typography>
      <Stack spacing={1}>
        {profile.contacts.map((c) => (
          <Typography key={c.label} color="text.secondary">
            <strong>{c.label}:</strong>{' '}
            <Link href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {c.value}
            </Link>
          </Typography>
        ))}
      </Stack>
    </Stack>
  )
}
