import { Box, Button, Card, CardContent, Chip, Divider, Link, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { profile } from '../shared/content/profile'

export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={6}>
      {/* Hero */}
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: -0.5 }}>
          {profile.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 0.5 }}>
          {profile.role}
          {profile.location ? ` • ${profile.location}` : ''}
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: 820 }} color="text.secondary">
          {t('heroLead')}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
          <Button component={RouterLink} to="/cv" variant="contained">
            {t('ctaDownloadCv')}
          </Button>
          <Button component={RouterLink} to="/contacts" variant="outlined">
            {t('ctaGoContacts')}
          </Button>
        </Stack>
      </Box>

      <Divider />

      {/* Skills */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
          {t('sectionSkills')}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {profile.skills.map((s) => (
            <Chip key={s} label={s} />
          ))}
        </Stack>
      </Box>

      <Divider />

      {/* Experience */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
          {t('sectionExperience')}
        </Typography>
        <Stack spacing={2}>
          {profile.experience.map((item) => (
            <Card key={`${item.company}-${item.period}`} variant="outlined">
              <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={0.5} sx={{ justifyContent: 'space-between' }}>
                  <Box>
                    <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.company}</Typography>
                  </Box>
                  <Typography color="text.secondary">{item.period}</Typography>
                </Stack>
                <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.5 }}>
                  {item.bullets.map((b) => (
                    <li key={b}>
                      <Typography component="span" color="text.secondary">
                        {b}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>

      <Divider />

      {/* Projects */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
          {t('sectionProjects')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          }}
        >
          {profile.projects.map((p) => (
            <Card key={p.title} variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography sx={{ fontWeight: 800 }}>{p.title}</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {p.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
                  {p.stack.map((s) => (
                    <Chip key={s} label={s} size="small" />
                  ))}
                </Stack>
                {p.links?.length ? (
                  <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
                    {p.links.map((l) => (
                      <Link key={l.href} href={l.href} target="_blank" rel="noreferrer" underline="hover">
                        {l.label}
                      </Link>
                    ))}
                  </Stack>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Divider />

      {/* Contacts */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
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
      </Box>
    </Stack>
  )
}
