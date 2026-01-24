import { Box, Button, Card, CardContent, Chip, Divider, Fade, Link, Stack, Typography, Grow } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'
import { profile } from '../shared/content/profile'

export const HomePage = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Stack spacing={6}>
      {/* Hero */}
      <Fade in timeout={800}>
        <Box id="home">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: -0.5,
              background: isDark
                ? 'linear-gradient(135deg, #a5b4fc 0%, #f0abfc 50%, #fda4af 100%)'
                : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: isDark
                ? 'drop-shadow(0 0 8px rgba(165, 180, 252, 0.45)) drop-shadow(0 0 18px rgba(240, 171, 252, 0.25))'
                : 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.35)) drop-shadow(0 0 18px rgba(139, 92, 246, 0.2))',
            }}
          >
            {profile.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 0.5 }}>
            {profile.role}
            {profile.location ? ` • ${profile.location}` : ''}
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 820, lineHeight: 1.7 }} color="text.secondary">
            {t('heroLead')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
            <Button href="/cv.pdf" target="_blank" variant="contained" size="large">
              {t('ctaDownloadCv')}
            </Button>
            <Button href="#contacts" variant="outlined" size="large">
              {t('ctaGoContacts')}
            </Button>
          </Stack>
        </Box>
      </Fade>

      <Divider />

      {/* Skills */}
      <Fade in timeout={800} style={{ transitionDelay: '100ms' }}>
        <Box id="skills">
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
            {t('sectionSkills')}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ gap: 1.5 }}>
            {profile.skills.map((s, index) => (
              <Grow in timeout={500} style={{ transitionDelay: `${index * 50}ms` }} key={s}>
                <Chip label={s} sx={{ fontSize: '0.9rem', py: 2 }} />
              </Grow>
            ))}
          </Stack>
        </Box>
      </Fade>

      <Divider />

      {/* Experience */}
      <Fade in timeout={800} style={{ transitionDelay: '200ms' }}>
        <Box id="experience">
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
            {t('sectionExperience')}
          </Typography>
          <Stack spacing={2.5}>
            {profile.experience.map((item, index) => (
              <Grow in timeout={600} style={{ transitionDelay: `${index * 100}ms` }} key={`${item.company}-${item.period}`}>
                <Card variant="outlined">
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={0.5} sx={{ justifyContent: 'space-between' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.title}</Typography>
                        <Typography color="text.secondary" sx={{ fontWeight: 500 }}>{item.company}</Typography>
                      </Box>
                      <Typography
                        color="text.secondary"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          bgcolor: 'action.hover',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          height: 'fit-content',
                        }}
                      >
                        {item.period}
                      </Typography>
                    </Stack>
                    <Box component="ul" sx={{ mt: 2, mb: 0, pl: 2.5 }}>
                      {item.bullets.map((b) => (
                        <li key={b} style={{ marginBottom: '0.5rem' }}>
                          <Typography component="span" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {b}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            ))}
          </Stack>
        </Box>
      </Fade>

      <Divider />

      {/* Projects */}
      <Fade in timeout={800} style={{ transitionDelay: '300ms' }}>
        <Box id="projects">
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
            {t('sectionProjects')}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 2.5,
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            }}
          >
            {profile.projects.map((p, index) => (
              <Grow in timeout={600} style={{ transitionDelay: `${index * 100}ms` }} key={p.title}>
                <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>{p.title}</Typography>
                    <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.6, flex: 1 }}>
                      {p.description}
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2, gap: 1 }}>
                      {p.stack.map((s) => (
                        <Chip key={s} label={s} size="small" />
                      ))}
                    </Stack>
                    {p.links?.length ? (
                      <Stack direction="row" spacing={2} sx={{ mt: 2.5 }}>
                        {p.links.map((l) => (
                          <Link key={l.href} href={l.href} target="_blank" rel="noreferrer">
                            {l.label}
                          </Link>
                        ))}
                      </Stack>
                    ) : null}
                  </CardContent>
                </Card>
              </Grow>
            ))}
          </Box>
        </Box>
      </Fade>

      <Divider />

      {/* Contacts */}
      <Fade in timeout={800} style={{ transitionDelay: '400ms' }}>
        <Box id="contacts" sx={{ pb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
            {t('sectionContacts')}
          </Typography>
          <Stack spacing={1.5}>
            {profile.contacts.map((c, index) => (
              <Grow in timeout={500} style={{ transitionDelay: `${index * 80}ms` }} key={c.label}>
                <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mr: 1,
                    }}
                  >
                    {c.label}:
                  </Box>
                  <Link href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {c.value}
                  </Link>
                </Typography>
              </Grow>
            ))}
          </Stack>
        </Box>
      </Fade>
    </Stack>
  )
}
