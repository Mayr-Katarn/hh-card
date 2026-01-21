import { Box, Container, Link, Typography } from '@mui/material'

type FooterProps = {
  name: string
}

export const Footer = ({ name }: FooterProps) => {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', mt: 6, py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          © {year} {name}. Сделано на React + MUI.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link href="https://github.com/" target="_blank" rel="noreferrer" underline="hover">
            GitHub
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}
