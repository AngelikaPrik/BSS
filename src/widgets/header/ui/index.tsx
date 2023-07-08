import {
  Container,
  Box,
  styled,
  BoxProps,
  IconButton,
  Badge,
} from '@mui/material'
import { ChangeLanguage } from '@features/language/actions/ui'
import { Search } from './search'
import menu from '@assets/header/menu.svg'
import logo from '@assets/header/logo.svg'
import account from '@assets/header/account.svg'
import cart from '@assets/header/cart.svg'

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}) as React.FC<BoxProps>

const LogoBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}) as React.FC<BoxProps>

export const Header = () => {
  return (
    <Container maxWidth='xl' sx={{ mt: '4rem' }}>
      <FlexBox sx={{ position: 'relative' }}>
        <FlexBox>
          <IconButton
            sx={{
              mr: { md: '3rem', xs: '1rem' },
              width: { md: '40px', xs: '30px' },
              p: 0,
            }}
          >
            <img width='100%' src={menu} alt='menu' />
          </IconButton>
          <Search />
        </FlexBox>
        <LogoBox>
          <Box sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, p: 0 }}>
            <img width='100%' src={logo} alt='BetterSkinShop' />
          </Box>
        </LogoBox>
        <FlexBox>
          <IconButton
            sx={{
              display: { sm: 'block', xs: 'none' },
              width: { md: '40px', xs: '30px' },
              mr: { md: '1rem', sm: '.5rem' },
              p: 0,
            }}
          >
            <img width='100%' src={account} alt='account' />
          </IconButton>
          <Badge
            badgeContent={4}
            color='info'
            sx={{
              width: { md: '40px', xs: '30px' },
              mr: { sm: '3rem', xs: 0 },
              p: 0,
            }}
          >
            <img width='100%' src={cart} alt='' />
          </Badge>

          <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
            <ChangeLanguage />
          </Box>
        </FlexBox>
      </FlexBox>
    </Container>
  )
}
