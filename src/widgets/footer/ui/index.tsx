import { Box, Container, Stack, Typography, styled } from '@mui/material'

import instagramIcon from '@assets/Footer/instagram.svg'
import facebookIcon from '@assets/Footer/facebook.svg'

const Title = styled(Typography)({
  color: '#634F60',
  textTransform: 'uppercase',
  lineHeight: '88.7%',
  marginBottom: '1.5rem',
  '@media (max-width:600px)': {
    marginBottom: '1rem',
  },
})

const LinkStyled = styled(Typography)({
  color: '#634F60',
  textTransform: 'uppercase',
  lineHeight: '88.7%',
  fontSize: '1.6rem',
  fontWeight: '300',
  marginBottom: '1rem',
  '@media (max-width:600px)': {
    fontSize: '1.4rem',
    marginBottom: '.5rem',
  },
})

export const Footer = () => {
  return (
    <Box sx={{ borderTop: '1px solid #634F60', width: '100%' }}>
      <Container maxWidth='lg' sx={{ mt: '2rem' }}>
        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          spacing='2rem'
          justifyContent='space-between'
        >
          <Stack>
            <Title variant='h5'>Links</Title>
            <Box mb='1rem' display='flex' gap={{ sm: '1rem', xs: '.5rem' }}>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={instagramIcon} alt='instagram' />
              </a>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={facebookIcon} alt='facebook' />
              </a>
            </Box>
            <LinkStyled>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                Privite group
                <br /> in facebook
              </a>
            </LinkStyled>
          </Stack>
          <Stack>
            <Title variant='h5'>Help</Title>
            <LinkStyled>Terms of delivery</LinkStyled>
            <LinkStyled>Terms and Conditions</LinkStyled>
          </Stack>
          <Stack>
            <Title variant='h5'>Contact us</Title>
            <LinkStyled>
              For more information and consultation,
              <br />
              contact us on our{' '}
              <b style={{ fontWeight: 500 }}>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Facebook
                </a>
              </b>{' '}
              or{' '}
              <b style={{ fontWeight: 500 }}>
                {' '}
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Instagram
                </a>
              </b>{' '}
              page.
            </LinkStyled>
            <LinkStyled>+995 557 653 940</LinkStyled>
            <LinkStyled>shopbetterskin@gmail.com</LinkStyled>
          </Stack>
          <Stack>
            <LinkStyled sx={{ fontSize: '1.4rem' }}>
              Copyright © 2022
            </LinkStyled>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
