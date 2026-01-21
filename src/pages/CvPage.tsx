import { Box, Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const CvPage = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          {t('cvTitle')}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {t('cvLead')}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {t('cvPathHint')}
        </Typography>
      </Box>
      <Box>
        <Button href="/cv.pdf" variant="contained">
          {t('ctaDownloadCv')}
        </Button>
      </Box>
    </Stack>
  )
}
