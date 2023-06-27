import {
  Container,
  Box,
  styled,
  BoxProps,
  IconButton,
  Badge,
} from '@mui/material'
import menu from '@assets/header/menu.svg'
import search from '@assets/header/search.svg'
import logo from '@assets/header/logo.svg'
import account from '@assets/header/account.svg'
import cart from '@assets/header/cart.svg'
import { ChangeLanguage } from '@features/language/actions/ui'

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
}) as React.FC<BoxProps>

export const Header = () => {
  return (
    <Container maxWidth='xl'>
      <FlexBox>
        <FlexBox>
          <IconButton>
            <img src={menu} alt='menu' />
          </IconButton>
          <IconButton>
            <img src={search} alt='search' />
          </IconButton>
        </FlexBox>
        <FlexBox>
          <IconButton>
            <img src={logo} alt='BetterSkinShop' />
          </IconButton>
        </FlexBox>
        <FlexBox>
          <IconButton>
            <img src={account} alt='account' />
          </IconButton>
          <IconButton>
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
