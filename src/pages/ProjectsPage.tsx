import { Box, Card, CardContent, Chip, Link, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { profile } from '../shared/content/profile'

export const ProjectsPage = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
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
    </Stack>
  )
}
