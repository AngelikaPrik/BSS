import {
  Container,
  Box,
  styled,
  BoxProps,
  IconButton,
  Badge,
} from '@mui/material'
import menu from '@assets/header/menu.svg'
import logo from '@assets/header/logo.svg'
import account from '@assets/header/account.svg'
import cart from '@assets/header/cart.svg'
import { ChangeLanguage } from '@features/language/actions/ui'
import { Search } from './search'

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}) as React.FC<BoxProps>

export const Header = () => {
  return (
    <Container maxWidth='xl' sx={{ mt: '2rem' }}>
      <FlexBox sx={{ position: 'relative' }}>
        <FlexBox>
          <IconButton sx={{ mr: '4rem' }}>
            <img src={menu} alt='menu' />
          </IconButton>
          <Search />
        </FlexBox>
        <FlexBox
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <IconButton>
            <img src={logo} alt='BetterSkinShop' />
          </IconButton>
        </FlexBox>
        <FlexBox>
          <IconButton>
            <img src={account} alt='account' />
          </IconButton>
          <IconButton sx={{ mr: '4rem' }}>
            <Badge badgeContent={4} color='info'>
              <img src={cart} alt='' />
            </Badge>
          </IconButton>
          <ChangeLanguage />
        </FlexBox>
      </FlexBox>
    </Container>
  )
}
